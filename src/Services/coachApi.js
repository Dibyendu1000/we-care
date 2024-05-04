import { getAllIdentities, getIdentityById, registerIdentity } from "./baseApi";

export const getAllCoaches = async () => {
  return await getAllIdentities("/coaches/");
};

export const getCoachById = async (id) => {
  return await getIdentityById("/coaches/" + id);
};

export const registerCoach = async (payload) => {
  return await registerIdentity("/coaches/", payload);
};
