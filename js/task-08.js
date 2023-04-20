const refs = {
  form: document.querySelector("form.login-form"),
};

refs.form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElement = event.currentTarget.elements;

  const email = formElement.email.value;
  const password = formElement.password.value;

  if (email === "") {
    return alert("Заполните email");
  } else if (password === "") {
    return alert("Заполните password");
  }

  const resultObj = {
    email,
    password,
  };
  console.log(resultObj);
  refs.form.reset();
}
