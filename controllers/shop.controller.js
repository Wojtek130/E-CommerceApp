const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {
  getProductWithTags,
  getUserByEmail,
  getUserByUserame,
  createUser,
} = require("../services/shop.service");


const helloFun = function (req, res) {
  res.json({ message: "Hello everybody :) :) :)" });
};

const AllProductsWithTags = async function (req, res) {
  const out = await getProductWithTags();
  res.json(out);
};

const login = async function (req, res) {

  // Our login logic starts here
  try {
    // Get user input
    const { username, password } = req.body;

    // Validate user input
    if (!(username && password)) {
      res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    const user = await getUserByUserame(username);

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = await jwt.sign(
        { user_id: user.id, username },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      // save user token
      await user.update({ token: token })
      await user.save()

      // user
      await res.status(200).json(user);
    }
    else {
      res.status(400).send("Invalid Credentials");
    }
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
};


const register = async function (req, res) {
  try {
    // Get user input
    console.log(req.body);
    const { username, email, password } = req.body;
    console.log(username, email, password);
    
    // Validate user input
    if (!(email && password && username)) {
      return res.status(400).send("All input is required");
    }
    
    // check if user already exist
    // Validate if user exist in our database
    // console.log(await getUserByEmail(password));
    if (await getUserByUserame(username) || await getUserByEmail(email)) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    //Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10);
    
    // Create user in our database
    // const user = await User.create({
      //   name,
      //   email: email.toLowerCase(), // sanitize: convert email to lowercase
      //   password: encryptedPassword,
      // });
      const userInfo = {
        username: username,
        email: email,
        password: encryptedPassword,
        role: false,
        token: "",
      };
      const user = await createUser(userInfo);
      // return res.status(400).send("test");
      
      // Create token
    const token = await jwt.sign(
      { user_id: user.id, username },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );
    // save user token
    await user.update({ token: token })
    await user.save()
    // return new user
    await res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  helloFun,
  AllProductsWithTags,
  login,
  register,
};
