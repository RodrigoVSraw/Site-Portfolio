// **Faz com que scroll para baixo simule o clique do botão de descida**
let rolar = true

window.addEventListener('wheel', function (evento) {

  const effectArea = window.scrollY < 10;

  if (rolar && effectArea) {
    if (evento.deltaY > 0) {

      const botão = document.getElementById('button-descend');

      if (botão) {
        console.log('Scroll detectado para baixo, acionando botão de descida.');
        evento.preventDefault();

        botão.click();

        rolar = false;

        setTimeout(() => { rolar = true; }, 200); // Tempo de espera para permitir outro scroll
      }
      else {
        console.log('Botão de descida não encontrado.');
      }
    }
  }
}, { passive: false });

// **Faz com que scroll para cima simule o clique do botão de subida**
window.addEventListener('wheel', function (evento) {
  const effectArea = window.scrollY > (document.getElementById('button-ascend').scrollHeight - window.innerHeight - 10);

  if (rolar && effectArea) {
    if (evento.deltaY < 0) {
      const botão = document.getElementById('button-ascend');

      if (botão) {
        console.log('Scroll detectado para cima, acionando botão de subida.');
        evento.preventDefault();

        botão.click();

        rolar = false;

        setTimeout(() => { rolar = true; }, 200); // Tempo de espera para permitir outro scroll
      }
      else {
        console.log('Botão de subida não encontrado.');
      }
    }
  }
}, { passive: false });


// **Código para copia de e-mail ao clicar**
const emailElement = 'rodrigo.rraw@gmail.com';

document.getElementById('button-copy').addEventListener('click', function () {  // Ao clicar no botão...
  navigator.clipboard.writeText(emailElement).then(function () { // Faz a copia do email para o clipboard
    const aviso = document.getElementById('area-span');

    aviso.className = "aparecer"; // Muda o display para que apareça o aviso na tela
    console.log("deu certo")
    
    setTimeout(() => { // Tempo que o aviso fica na tela;
      aviso.className = aviso.className.replace("aparecer", "");
    }, 3000);
  }).catch(err => {
    console.error('Erro ao copiar o e-mail: ', err);
  });
}); 
