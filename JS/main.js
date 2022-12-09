var button = document.querySelector(".btn-eyes");

button.addEventListener('click', function () {
  var mensagem = document.querySelector(".open-eyes");
  var slide = document.querySelector(".wrapper");

  if(slide.style.display === "none") {
    slide.style.display = "block"
  } else {
    slide.style.display = "none"
  }

  if(mensagem.style.display === "block") {
    mensagem.style.display = "none"
  } else {
    mensagem.style.display = "block"
  }
  
slide 
});




let delay = -0.4;
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });