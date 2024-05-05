const baseURL = "http://localhost:8080";

export const getAllIdentities = async (path) => {
  const res = await fetch(baseURL + path);
  const identities = res.json();
  console.log(identities);
};

export const getIdentityById = async (path, id) => {
  const res = await fetch(baseURL + path + id);
  const identityDetails = res.ok === true ? await res.json() : null;
  return identityDetails;
};

export const registerIdentity = async (path, payload) => {
  const res = await fetch(baseURL + path, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  });
  return await res.json();
};
