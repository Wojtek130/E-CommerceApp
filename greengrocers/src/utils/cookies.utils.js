import Cookies from "js-cookie";

const getSetCookie = async function (cookieName) {
  let c = Cookies.get(cookieName);

  if (!c) {
    Cookies.set(cookieName, await JSON.stringify([]));
    c = Cookies.get(cookieName);
  }
  return await JSON.parse(c);
};

const appendToCookie = async function (cookieName, newObj) {
  const c = await getSetCookie(cookieName);
  // console.log(c, "hyje");
  Cookies.set(cookieName, await JSON.stringify([...c, newObj]));
};

const setCookieValue = async function (cookieName, newValue) {
  Cookies.set(cookieName, await JSON.stringify(newValue));
};


const setCookie = function (cookieName, value) {
  Cookies.set(cookieName, value);
};

const getCookie = function (cookieName) {
  return Cookies.get(cookieName);
};

const deleteCookie = function (cookieName) {
  Cookies.remove(cookieName);
};

const loginCookieExists = function () {
  return !!Cookies.get("access-token");
};

const deleteLoginCookie = function () {
  Cookies.remove("access-token");
};

const deleteCartCookie = function () {
  Cookies.remove("cart");
};

// module.exports = { getSetCookie };
export {
  appendToCookie,
  getSetCookie,
  setCookieValue,
  setCookie,
  getCookie,
  deleteCookie,
  loginCookieExists,
  deleteLoginCookie,
  deleteCartCookie
};
