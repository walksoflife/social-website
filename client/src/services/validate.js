export const setError = (element, message) => {
  const inputControl = element.current.parentElement;
  const errorDisplay = inputControl.children[1];

  errorDisplay.innerText = message;
  inputControl.classList.add("err-input");
  inputControl.classList.remove("success-input");
};

const setSuccess = (element) => {
  const inputControl = element.current.parentElement;
  const errorDisplay = inputControl.children[1];

  errorDisplay.innerText = "";
  inputControl.classList.add("success-input");
  inputControl.classList.remove("err-input");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

// REGISTER FORM
export const validateRegisterForm = (
  refEmail,
  refName,
  refUsername,
  refPassword,
  refConfirmPassword
) => {
  const emailValue = refEmail.current.value.trim();
  const nameValue = refName.current.value.trim();
  const usernameValue = refUsername.current.value.trim();
  const passwordValue = refPassword.current.value.trim();
  const confirmPasswordValue = refConfirmPassword.current.value.trim();

  if (emailValue === "") {
    setError(refEmail, "Email is required.");
  } else if (!isValidEmail(emailValue)) {
    setError(refEmail, "Provide a valid email address.");
  } else {
    setSuccess(refEmail);
  }

  if (nameValue === "") {
    setError(refName, "Name is required.");
  } else if (nameValue.length < 4) {
    setError(refName, "Name must be at least 4 character.");
  } else {
    setSuccess(refName);
  }

  if (usernameValue === "") {
    setError(refUsername, "Username is required.");
  } else if (usernameValue.length < 4) {
    setError(refName, "Username must be at least 4 character.");
  } else {
    setSuccess(refUsername);
  }

  if (passwordValue === "") {
    setError(refPassword, "Password is required.");
  } else if (passwordValue.length < 8) {
    setError(refPassword, "Password must be at least 8 character.");
  } else {
    setSuccess(refPassword);
  }

  if (confirmPasswordValue === "") {
    setError(refConfirmPassword.current, "Please confirm your password.");
  } else if (confirmPasswordValue !== passwordValue) {
    setError(refConfirmPassword.current, "Passwords doesn't match.");
  } else {
    setSuccess(refConfirmPassword.current);
  }
};

// LOGIN FORM
export const validateLoginForm = (refEmail, refPassword) => {
  const emailValue = refEmail.current.value.trim();
  const passwordValue = refPassword.current.value.trim();

  if (emailValue === "") {
    setError(refEmail, "Email is required.");
  } else if (!isValidEmail(emailValue)) {
    setError(refEmail, "Provide a valid email address.");
  } else {
    setSuccess(refEmail);
  }

  if (passwordValue === "") {
    setError(refPassword, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(refPassword, "Password must be at least 8 character.");
  } else {
    setSuccess(refPassword);
  }
};
