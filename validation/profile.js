const Validator = require("validator");
const isEmpty = require("./is-empty");

function validateProfileInput(data) {
  let errors = {};

  //data.name = !isEmpty(data.name) ? data.name : "";

  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = "Handle must be between 2 and 40 characters";
  }

  if (!isEmpty(data.website)) {
    if (!Validator.isUrl(data.website)) {
      errors.website = "Not a valid URL";
    }
  }

  if (!isEmpty(data.youtube)) {
    if (!Validator.isUrl(data.youtube)) {
      errors.youtube = "Not a valid URL";
    }
  }
  if (!isEmpty(data.twitter)) {
    if (!Validator.isUrl(data.twitter)) {
      errors.twitter = "Not a valid URL";
    }
  }
  if (!isEmpty(data.facebook)) {
    if (!Validator.isUrl(data.facebook)) {
      errors.facebook = "Not a valid URL";
    }
  }
  if (!isEmpty(data.linkedin)) {
    if (!Validator.isUrl(data.linkedin)) {
      errors.linkedin = "Not a valid URL";
    }
  }
  if (!isEmpty(data.instagram)) {
    if (!Validator.isUrl(data.instagram)) {
      errors.instagram = "Not a valid URL";
    }
  }

  if (isEmpty(data.skills)) {
    errors.skills = "skills field is required";
  }
  if (isEmpty(data.status)) {
    errors.status = "status field is required";
  }
  if (isEmpty(data.handle)) {
    errors.handle = "handle field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}

module.exports = validateProfileInput;
