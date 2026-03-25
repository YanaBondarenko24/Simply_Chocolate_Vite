import iziToast from 'izitoast'

const product = document.querySelector(".products-list");

product.addEventListener("click", addProduct);


function addProduct(e) {
   if (!e.target.classList.contains("products-item-btn")) {
       return;   
    }
        iziToast.show({
    message: 'Product added to basket',
    messageColor:'var(--white)',
    backgroundColor: 'var(--orange)',
   
});
    const card = e.target.closest(".products-list-item");
    let localStorageData = JSON.parse(localStorage.getItem("selectedProducts"))  || [];

    
    const selectedProducts = {
      id : card.id,
      title : card.querySelector(".products-item-title").textContent,
      text : card.querySelector(".products-item-text").textContent,
      price : Number.parseInt(card.querySelector(".products-item-btn").textContent),
      img : card.querySelector(".products-item-image").src,
      quantity: 1,
    };
    const id = e.target.closest(".products-list-item").id;
    const existingProduct = localStorageData.find(item => 
        item.id === id
  );
    
  if (existingProduct) {
    existingProduct.quantity += 1; 
        } else {
        localStorageData.push(selectedProducts);
  }     
    localStorage.setItem("selectedProducts",JSON.stringify(localStorageData))
   
}

