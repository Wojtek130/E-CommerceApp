const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
  const token = req.body.token;
  if (!token) {
    return res.status(403).send("Access forbidden. A token is required for authentication");
  }
  try {
    const data = jwt.verify(token, config.TOKEN_KEY);
    req.body.userId = data.userId;
    req.body.userName = data.username;
    req.body.isAdmin = data.isAdmin;
  } catch (err) {
    return res.status(401).send("Access forbidden. Invalid Token");
  }
  return next();
};

module.exports = verifyToken;
