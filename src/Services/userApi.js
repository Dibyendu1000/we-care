import { getAllIdentities, getIdentityById, registerIdentity } from "./baseApi";

export const getAllUsers = async () => {
  return await getAllIdentities("/users/");
};

export const getUserById = async (id) => {
  return await getIdentityById("/users/", id);
};

export const registerUser = async (payload) => {
  return await registerIdentity("/users/", payload);
};
