import * as basicLightbox from 'basiclightbox'
const madeIcon = document.querySelector(".made-icon");
const buttonMade = document.querySelector(".hero-btn");
madeIcon.addEventListener("click", openVideo);
buttonMade.addEventListener("click", openVideo);


function openVideo() {
    
    const instance = basicLightbox.create(`
        <iframe src="https://www.youtube.com/embed/hymVP5KABE8?si=Erg3hqwEMyu3pRH2" width="560" height="315"  
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen></iframe>
    `)
    
    instance.show()
}
