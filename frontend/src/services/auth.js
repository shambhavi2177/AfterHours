import api from "./api";

export const login = async ({ email, password }) => {
  const res = await api.post("/auth/login", { email, password });
  return res;
};

export const register = async ({ email, password }) => {
  console.log("inside register in auth.js")
  const res = await api.post("/auth/register", {
    email,
    password,
  });
  return res;
};
