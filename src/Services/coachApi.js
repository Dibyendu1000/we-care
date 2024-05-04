import { getAllIdentities, getIdentityById } from "./baseApi";

export const getAllCoaches = async () => {
  return await getAllIdentities("/coaches/");
};

export const getCoachById = async (id) => {
  return await getIdentityById("/coaches/" + id);
};
