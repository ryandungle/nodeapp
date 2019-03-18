const Validator = require("validator");
const isEmpty = require("./is-empty");

function validateLoginInput(data) {
  let errors = {};

  //data.name = !isEmpty(data.name) ? data.name : "";

  if (!isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  if (isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  if (isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}

module.exports = validateLoginInput;
