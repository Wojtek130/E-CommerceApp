const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const {
  getUserByEmail,
  getUserByUserame,
  createUser,
} = require("../services/shop.service");

const login = async function (req, res) {
  try {
    const { username, password } = req.body;
    if (!(username && password)) {
      res.status(400).send("All input is required");
    }
    const user = await getUserByUserame(username);
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = await jwt.sign(
        { userId: user.dataValues.id, username: username },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      await res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json({ message: "Logged in successfully 😊👌" });
    } else {
      res.status(400).json({ message: "Invalid Credentials." });
    }
  } catch (err) {
    console.log(err);
  }
};

const logout = async function (req, res) {
  try {
    return res
      .clearCookie("access_token")
      .status(200)
      .json({ message: "Successfully logged out 😏🍀" });
  } catch (err) {
    console.log(err);
  }
};

const register = async function (req, res) {
  // POST request body type json: { "username" : "bobr", "email" : "bobr@mail.com", "password" : "bobr"}
  try {
    console.log(req.body);
    const { username, email, password } = req.body;
    console.log(username, email, password);
    if (!(email && password && username)) {
      return res.status(400).send("All input is required");
    }
    if (await getUserByUserame(username)) {
      return res.status(409).json({ message: "User with this username already exists." });
    }
    if (await getUserByEmail(email)) {
      return res.status(409).json({ message: "User with this email already exists." });
    }
    encryptedPassword = await bcrypt.hash(password, 10);
    const userInfo = {
      username: username,
      email: email,
      password: encryptedPassword,
      role: false,
    };
    await createUser(userInfo);
    await res.status(200).json({ message: "Successfully registrated 😏🍀." });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  login,
  register,
  logout,
};
