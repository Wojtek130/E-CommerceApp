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

// module.exports = { getSetCookie };
export { appendToCookie, getSetCookie, setCookieValue };
