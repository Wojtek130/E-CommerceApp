const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
  // const token = req.cookies.access_token;
  const token = req.body.token;
  console.log(req.body, "jgjgjgjjgjgjgj");
  console.log(token);
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const data = jwt.verify(token, config.TOKEN_KEY);
    console.log(data);
    console.log(data.userId);
    console.log(data.isAdmin);
    req.body.userId = data.userId;
    req.body.userName = data.username;
    req.body.isAdmin = data.isAdmin;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;
