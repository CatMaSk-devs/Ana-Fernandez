const saveToken = token => {
  return localStorage.setItem("token", token);
};

const getToken = token => {
  return localStorage.getItem("token");
};

const removeToken = token => {
  return localStorage.removeItem("token");
};

export { saveToken, getToken, removeToken };
