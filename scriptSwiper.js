const swiper = new Swiper('.swiper', {
    slidesPerView: 2,
    spaceBetween: 25,
    pagination: {
        el:'.swiper-pagination'
    },

});

swiper.height = 450;

function setSources(){

    const imagesGalery = document.querySelectorAll('.swiper--galery-imgs');

    for(var i = 0; i < imagesGalery.length; i++){
        imagesGalery[i].src = `./img/JSFestas/${i + 1}.jpg`;
    }
}

setSources();

var botaoNext = document.querySelector(".swiper-button-next");
var botaoPrev = document.querySelector(".swiper-button-prev");

botaoNext.onclick = function () {
    swiper.slideNext();
    console.log(swiper.activeIndex);
}

botaoPrev.onclick = function () {
    swiper.slidePrev();
    console.log(swiper.activeIndex);
}