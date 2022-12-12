// BOTÃO PARA TRAZER SLIDE E APAGAR A MENSAGEM

var button = document.querySelector(".btn-eyes");

button.addEventListener('click', function () {
  var mensagem = document.querySelector(".open-eyes");
  var slide = document.querySelector(".wrapper");
  // var bg = document.querySelector(".inicio");

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
        <p>"A verdade <br>É que todos somos fogo <br>Ás vezes fagulha às vezes incêndio."
                </p>
                <cite><a href="https://www.instagram.com/tempofeio/" target="_blank" class="link-citacao">Tempo Feio</a></cite>
      
        `
      }
    })
  })
})
