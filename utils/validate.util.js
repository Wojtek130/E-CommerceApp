const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const validatePassword = (password) => {
  return password.lenth >= 4;
};

const validateUsername = (username) => {
  return username.match(/^[a-zA-Z]+ [a-zA-Z]+$/);
};

module.exports = {
  validateEmail,
  validatePassword,
  validateUsername,
};
