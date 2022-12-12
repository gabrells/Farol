// BOTÃO PARA TRAZER SLIDE E APAGAR A MENSAGEM

var button = document.querySelector(".btn-eyes");

button.addEventListener('click', function () {
  var mensagem = document.querySelector(".open-eyes");
  var slide = document.querySelector(".wrapper");
  // var bg = document.querySelector("#inicio");

  if(slide.style.display === "none") {
    slide.style.display = "block"
  } else {
    slide.style.display = "none"
  }
  // if(bg.style.display === "none") {
  //   bg.style.display = "block"
  // } else {
  //   slide.style.display = "none"
  // }

  if(mensagem.style.display === "block") {
    mensagem.style.display = "none"
  } else {
    mensagem.style.display = "block"
  }
  
slide 
});

// DESENVOLVIMENTO DO SLIDE
const buttons = document.querySelectorAll('.buttons_btn')
const comment = document.getElementById('texto')
const events = ['click', 'keyup']

buttons.forEach(btn => {
  events.forEach(event => {
    btn.addEventListener(event, () => {
      // console.log(event)
      if (!comment.classList.contains('comment')) {
        comment.classList.add('comment')
        comment.innerHTML = `
      
                <p>"Paro nas esquinas <br>Entre faixas de pedestres <br>E imagino <br>Quantas saudades nasceram <br>No intervalo de um sinal vermeljo."
                </p>
                <cite><a href="https://www.instagram.com/tempofeio/" target="_blank" class="link-citacao">Tempo Feio</a></cite>
            </blockquote>
        </div>
        
              <div class="box swiper-slide">
                <blockquote id="texto">
                    <p>"Sou resultado <span></span>Das minhas escolhas <br>Dos pouses forçados <br>Dos dias ruins <br>Marcas de expressão <br>E marcas que não se expressam <br>A cabeça segue erguida <br>E o sangue corre quente <br>Nem sempre gosto do espelho <br>Mas admiro o que você vê <br>Quando olha pra mim."
                    </p>
                    <cite><a href="https://www.instagram.com/tempofeio/" target="_blank" class="link-citacao">Tempo Feio</a></cite>
                
        `
        


      }
    })
  })
})
