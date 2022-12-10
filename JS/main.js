// BOTÃO PARA TRAZER SLIDE E APAGAR A MENSAGEM

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


// DESENVOLVIMENTO DO SLIDE

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

  // Tentativa de criação de slide pelo JS

// function construcaoSlide (texto, autor) {
//   return `
//     <div class="wrapper">
//       <p>${texto}</p>
//       <cite>${autor}</cite>
//   `
// }

// document.querySelector('#page-txt').innerHTML =
//     construcaoSlide("<div class="box swiper-slide"> <blockquote> <p>"Outros amaram em mim a mulher<br> A ti peço para amar<br> A sombra <br>Ama-me os fios de cabelo que caem <br>O farelo à ponta dos dedos <br>A poeira das unhas recém-lixadas <br>Ama na minha boca a palavra que nunca é dita <br>Ama nos meus livros aquele que achei num sebo <br>E que decidi comprar só pela dedicatória Datada de junho de 1732 <br>Ver a caligrafia de um morto desejando boa leitura <br>A outro morto <br>Duas mãos se encontrando assim, cobertas <br>De esquecimento e pó"</p><cite class="citacao">Mar Becker</cite></blockquote></div>)