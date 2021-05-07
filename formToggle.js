const buttonForm = document.querySelector(".btn-create");
const form = document.querySelector(".wrapper-registration__form");
const btnClose = document.querySelector(".btn-close");

buttonForm.addEventListener("click", openFormRegistration);
btnClose.addEventListener("click", closeFormRegistration);

function openFormRegistration() {
  form.classList.add("is-active");
}

function closeFormRegistration() {
  form.classList.remove("is-active");
}
