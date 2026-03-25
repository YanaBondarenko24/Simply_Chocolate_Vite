/* export function renderProduct() {
     const localStorageData = JSON.parse(localStorage.getItem("selectedProducts"));
     localStorageData.map(({idProduct, quantity})=>{     
         const productCard = document.getElementById(idProduct);

         console.log(productCard.children);
return (`<li "products-list-item">
        <img class="products-item-image" 
        src="./images/products/img-1-min.jpg" alt="Orange" width="230">
        <h3 class="products-item-title"> Orange </h3>
        <p class="products-item-text">${productCard.children}}</p>
        <p class="products-quantity">${quantity}</p>
    </li>`)
     })
} */