const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  console.log(token);
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const data = jwt.verify(token, config.TOKEN_KEY);
    console.log(data);
    console.log(data.userId);
    console.log(data.isAdmin);
    req.userId = data.userId;
    req.userUsername = data.username;
    req.isAdmin = data.isAdmin;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;
