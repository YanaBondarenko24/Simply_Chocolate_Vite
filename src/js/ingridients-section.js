
const ingridients = document.querySelector(".ingridients-list");

ingridients.addEventListener("click", openImageInfo);


function openImageInfo(event){
        if (!event.target.closest(".ingridients-list-icon")) {
           return;
        }
        const ingridientsCard = event.target.closest(".ingridients-list-item");
        console.log(ingridientsCard);
        
        const overlay = ingridientsCard.querySelector(".overlay-text");
        overlay.classList.add("open");
        overlay.style.transform = "translateY(0)";
        overlay.addEventListener("click", (e) => { 
            if (e.target.closest(".overlay-text")) {
            overlay.classList.remove("open");
        }}
        );
}
