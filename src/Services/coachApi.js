import { getAllIdentities, getIdentityById, registerIdentity } from "./baseApi";

export const getAllCoaches = async () => {
  const x = await getAllIdentities("/coaches/");
  console.log(x);
  return x;
};

export const getCoachById = async (id) => {
  return await getIdentityById("/coaches/", id);
};

export const registerCoach = async (payload) => {
  return await registerIdentity("/coaches/", payload);
};
