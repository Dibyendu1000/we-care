function checkIfEmpty(formDetails) {
  let emptyFields = [];
  Object.keys(formDetails).forEach((field) => {
    if (formDetails[field] === "") emptyFields.push(field);
  });
  if (emptyFields.length === 0) return "";
  else return emptyFields.toString() + " cannot be empty !";
}

export default checkIfEmpty;
