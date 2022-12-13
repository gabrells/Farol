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
      
        <blockquote>    
        <p>"A utopia está lá no horizonte.<br> Me aproximo dois passos, ela se afasta dois passos. <br>Caminho dez passos e o horizonte corre dez passos.<br>Por mais que eu caminhe, jamais alcançarei.<br>Para que serve a utopia? <br>Serve para isso:<br> Para que eu não deixe de caminhar."
        </p>
        <cite><a href="https://en.wikipedia.org/wiki/Fernando_Birri" target="_blank" class="link-citacao">Fernando Birri</a></cite>
    </blockquote>
</div>
                
        `
        


      }
    })
  })
})
