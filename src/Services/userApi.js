import { getAllIdentities, getIdentityById } from "./baseApi";

export const getAllUsers = async () => {
  return await getAllIdentities("/users/");
};

export const getUserById = async (id) => {
  return await getIdentityById("/users/" + id);
};
