var largura = window.screen.width;

if(largura < 900){
  slideQuant = 1;
}  else{
  slideQuant = 2;
}


const swiper = new Swiper('.swiper', {
  autoHeight: true,
  slidesPerView: slideQuant,
  spaceBetween: 25,
  pagination: {
      el: '.swiper-pagination'
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

function setSources(){

  const imagesGalery = document.querySelectorAll('.swiper--galery-imgs');

  for(var i = 0; i < imagesGalery.length; i++){
    imagesGalery[i].src = `./img/JSFestas/${i + 1}.webp`;
  }
}

setSources();