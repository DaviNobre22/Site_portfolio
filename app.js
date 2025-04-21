const video1 = document.getElementById("projectvideo1");
const video2 = document.getElementById("projectvideo2");

const sidebar = document.querySelector('.sidebar');
const menuicon = document.querySelector('.menu-icon');
const videolist = [video1,video2];

videolist.forEach(function(video){
    video.addEventListener('mouseover', function(){
        video.play()
    })
    video.addEventListener('mouseout' , function(){
        video.pause()
    })
})

const copyButton = document.getElementById('copyButton');
  // Pega o elemento que contém o número
  const phoneNumberSpan = document.getElementById('phoneNumber');

  if (copyButton && phoneNumberSpan) {
    // Pega o texto do número de telefone
    const phoneNumber = phoneNumberSpan.innerText;

    copyButton.addEventListener('click', () => {
      // Usa a API moderna do Clipboard para copiar o texto
      navigator.clipboard.writeText(phoneNumber)
        .then(() => {
          // Sucesso! Feedback visual opcional:
          console.log('Número copiado:', phoneNumber);
          // Muda o ícone ou texto temporariamente (exemplo)
          const originalIcon = copyButton.innerHTML; // Salva o ícone original
          copyButton.innerHTML = "<i class='bx bx-check'></i>"; // Mostra um check
          copyButton.disabled = true; // Desabilita brevemente

          setTimeout(() => {
            copyButton.innerHTML = originalIcon; // Restaura o ícone original
            copyButton.disabled = false; // Reabilita
          }, 1500); // Volta ao normal após 1.5 segundos
        })
        .catch(err => {
          // Erro ao copiar (raro com texto, mas bom ter)
          console.error('Falha ao copiar o número: ', err);
          alert('Não foi possível copiar o número.');
        });
    });
  } else {
    console.warn('Elemento do número de telefone ou botão de cópia não encontrado.');
  }

menuicon.addEventListener("click", function(){
    sidebar.classList.add("opensidebar")
})
document.querySelector(".close-icon").addEventListener("click", function() {
    sidebar.classList.remove("opensidebar"); // ou "open-sidebar" se usar com traço
});

document.getElementById("scrollToContact").addEventListener("click", function() {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  });

(function() {
    emailjs.init('uqntxXcXSfP49ajSt'); // Substitua com seu User ID do EmailJS
  })();
  
  document.getElementById('send-button').addEventListener('click', function(e) {
    e.preventDefault(); // Impede que o formulário recarregue a página
  
    // Pegando os valores do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Verificando se os campos estão preenchidos
    if (!name || !email || !message) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
  
    emailjs.send('service_53wgo6d', 'template_uye7h4j', {
      from_name: name,
      from_email: email,
      message: message
    })
    .then(function(response) {
      alert('Mensagem enviada com sucesso!');
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
    })
    .catch(function(error) {
      alert('Erro ao enviar a mensagem. Tente novamente.');
      console.error(error);
    });
  });

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
      sidebar.classList.remove('opensidebar'); // mesmo nome da classe usada no .add
    });
  });