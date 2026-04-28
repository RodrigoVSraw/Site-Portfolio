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
