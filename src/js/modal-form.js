import {showSuccessfull, showErrorMessage} from "./footer-form.js";
const buttonForm = document.querySelector(".reviews-btn");
const body = document.querySelector("body");
const buttonClose = document.querySelector(".close-btn");
const modalForm = document.querySelector(".form-reviews");
const formContainer = document.querySelector(".form-container");
const overlayModal = document.querySelector(".overlay-form"); 
const loaderModal = document.querySelector(".loader-modal");




buttonForm.addEventListener("click", openModal);
modalForm.addEventListener("submit", sendForm);
modalForm.addEventListener("input", handleInput);
buttonClose.addEventListener("click", closeModal);


function openModal() {
    formContainer.classList.add("is-open");
    body.classList.add("no-scroll");
    overlayModal.classList.add("is-open");
}

async function sendForm(e) {
    e.preventDefault();
    buttonForm.disabled = true;
    [...e.target.elements].forEach((item) => {
    if (!item.value.trim().toLowerCase().length) {
      buttonForm.disabled = true;
     return;
    }
    loaderModal.classList.toggle("hide");
  })
  try {
  const res = await axios.post("/users",
    {name: modalForm.elements["name"].value.trim().toLowerCase(),
    email: modalForm.elements["email"].value.trim().toLowerCase(),
    phone: modalForm.elements["phone"].value.trim().toLowerCase(),
    comment: modalForm.elements["comment"].value.trim().toLowerCase()
  });
showSuccessfull();
closeModal();
  console.log("ok");
} catch (error) {
    showErrorMessage();
  }
  finally{
    e.target.reset(); 
    buttonForm.disabled = false;
    loaderModal.classList.toggle("hide");
  }
}

function closeModal() {
    formContainer.classList.remove("is-open");
    body.classList.remove("no-scroll");
     overlayModal.classList.remove("is-open");
}

function handleInput(e) {
     if (!e.target.value.trim().length) {
     buttonForm.disabled = true;    
    }
    buttonForm.disabled = false;
}