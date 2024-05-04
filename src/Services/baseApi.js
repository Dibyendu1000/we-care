const baseURL = "http://localhost:8080";

export const getAllIdentities = async (id) => {
  const res = await fetch(baseURL + id);
  const identities = res.json();
  console.log(identities);
};

export const getIdentityById = async (id) => {
  const res = await fetch(baseURL + id);
  const identityDetails = res.ok === true ? await res.json() : null;
  return identityDetails;
};
