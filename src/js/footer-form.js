import axios from 'axios'
import iziToast from 'izitoast'
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
const footerForm = document.querySelector(".footer-form");
const emailInput = footerForm.querySelector(".footer-form-input");
const button = footerForm.querySelector(".footer-form-btn");
const loader = document.querySelector(".loader");

footerForm.addEventListener("submit", getSubscribtion);
emailInput.addEventListener("input", handleInput);

 async function getSubscribtion(e) {
    e.preventDefault();
    button.disabled = true;
    if(!emailInput.value.trim().length){
        showError();
        button.disabled = true;
        return;
    }  
    loaderControl();
    try {
        const response = await axios.post("/posts", {email: emailInput.value.trim()});
        console.log(response.data);
        showSuccessfull();
        
    } catch (error) {
        showErrorMessage();
        
    }
    finally{
        e.target.reset(); 
        button.disabled = false;
        loaderControl();
     
  }
}
function handleInput(e){
    if (!e.target.value.trim().length) {
     button.disabled = true;    
    }
    button.disabled = false;
}

export function showSuccessfull() {
    iziToast.show({
    message: 'Successfully!',
    messageColor:'var(--white)',
    backgroundColor: 'var(--orange)',
   
});
}
function showError() {
    iziToast.show({
    message: 'Use a correct email!',
    messageColor:'var(--white)',
    backgroundColor: '#e74a3b',
});
}

export function showErrorMessage() {
    iziToast.show({
    message: 'Error!Try again later!',
    messageColor:'var(--white)',
    backgroundColor: '#e74a3b',
});
}

function loaderControl() {
    loader.classList.toggle("hide");
}