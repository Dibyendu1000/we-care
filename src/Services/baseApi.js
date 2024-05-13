const baseURL = "http://localhost:8080";

export const getAllIdentities = async (path) => {
  const res = await fetch(baseURL + path);
  const identities = await res.json();
  console.log(identities);
  return identities;
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

export const deleteIdentity = async (path, id) => {
  const res = await fetch(baseURL + path + id, {
    method: "DELETE",
  });
  return await res.json();
};

export const updateIdentity = async (path, id, payload) => {
  console.log(payload);
  await fetch(baseURL + path + id, {
    method: "PUT",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  });
};
