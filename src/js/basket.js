
const button = document.querySelector(".hero-buy-btn");
const overlayModalEmpty = document.querySelector(".overlay-modal-empty"); 
const modalBasketEmpty = document.querySelector(".modal-basket-empty");
const closeButtonEmpty = modalBasketEmpty.querySelector(".close-btn-modal");
const body = document.querySelector('body');
const container = document.querySelector(".modal-product-list");


const modalBasket = document.querySelector(".modal-basket");
const overlayModal = modalBasket.querySelector(".overlay-modal");
const closeButton = modalBasket.querySelector(".close-btn-modal");
 
button.addEventListener("click", openBasket);
closeButtonEmpty.addEventListener("click", closeEmptyBasket);

closeButton.addEventListener("click", closeBasket);
modalBasket.addEventListener("click", removeProduct);


function openBasket() {
   const localStorageData = JSON.parse(localStorage.getItem("selectedProducts")) || [];
if (!localStorageData || localStorageData.length === 0) {
    modalBasketEmpty.classList.remove("hide");
    overlayModalEmpty.classList.add("is-open");
    body.classList.add("no-scroll");  
}else{
    modalBasket.classList.remove("hide");
    overlayModal.classList.add("is-open");
    body.classList.add("no-scroll"); 
    getMarkup();

}
}

function closeEmptyBasket() {
  modalBasketEmpty.classList.add("hide");
 overlayModalEmpty.classList.remove("is-open"); 
 body.classList.remove("no-scroll");  
}


function closeBasket() {
modalBasket.classList.add("hide");
 overlayModal.classList.remove("is-open"); 
 body.classList.remove("no-scroll");   
}

let total = 0;


function getMarkup() {
  const data = JSON.parse(localStorage.getItem("selectedProducts")) || [];

  total = 0;

  const markup = data.map(({ id, title, text, price, img, quantity }) => {
    
    const itemTotal = price * quantity;
    total += itemTotal;

    return `
      <li class="basket-products-list-item">
        <button class="products-del-btn btn-modal" data-id="${id}" type="button">
          <svg class="products-del-btn-icon" data-id="${id}" width="12" height="12">
            <use href="./images/icons.svg#icon-close"></use>
          </svg>
        </button>

        <img class="products-item-image" src="${img}" alt="${title}" width="230">
        <h3 class="products-item-title">${title}</h3>
        <p class="products-item-text">${text}</p>
        <p class="products-quantity">Total quantity: ${quantity} pcs</p>
        <p class="products-price">Price: ${itemTotal} $</p>
      </li>
    `;
  }).join("");

  container.innerHTML = `
    ${markup}
    <div class="modal-wrapper">
      <p class="modal-text">Total: ${total} $</p>
      <button class="modal-btn btn acent-btn" type="button">Buy</button>
    </div>
  `;
}


function removeProduct(e) {
  if(!e.target.closest(".products-del-btn")){
   return;   
}
 const data = JSON.parse(localStorage.getItem("selectedProducts")) || [];
 const newData = data.filter(item => {
 const id = e.target.dataset.id;
 return item.id !== id;
})
localStorage.setItem("selectedProducts", JSON.stringify(newData))
console.log(newData);
openBasket();
if (data.length === 1) {
    closeBasket()
}
}
