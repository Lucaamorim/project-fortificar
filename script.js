document.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar-top'); 
    const nav = document.querySelector('.nav-bot');
    const navbarBottom = navbar.getBoundingClientRect().bottom;

    if (window.scrollY > navbarBottom) {
        nav.classList.add('fixed'); 
    } else {
        nav.classList.remove('fixed');
    }
});

 // Dados do gráfico
// const labels = [
// 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
// 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
// ];

// const data = {
// labels: labels,
// datasets: [
//   {
//     label: 'Quantidade de Projetos',
//     data: [46, 80, 150, 165, 92, 67, 187, 152, 97, 79, 48, 197], // Quantidade de projetos
//     backgroundColor: 'rgba(16, 69, 139, 0.7)',
//     borderColor: 'rgba(16, 69, 139, 1)',
//     borderWidth: 1
//   },
//   {
//     label: 'Dinheiro Entregue (em milhares)',
//     data: [50, 60, 40, 80, 100, 55, 90, 110, 95, 120, 130, 150], // Dinheiro entregue
//     type: 'line', 
//     borderColor: 'rgba(255, 99, 132, 1)',
//     borderWidth: 2,
//     tension: 0.3,
//     pointBackgroundColor: 'rgba(255, 99, 132, 1)'
//   }
// ]
// };

// // Configuração do gráfico
// const config = {
// type: 'bar',
// data: data,
// options: {
//   responsive: true, // Garantir que o gráfico seja responsivo
//   maintainAspectRatio: true,
//   plugins: {
//     legend: {
//       position: 'top',
//     },
//     tooltip: {
//       mode: 'index',
//       intersect: false,
//     }
//   },
//   scales: {
//     y: {
//       beginAtZero: true,
//       title: {
//         display: true,
//         text: 'Quantidade / Dinheiro (em milhares)'
//       }
//     },
//     x: {
//       title: {
//         display: true,
//         text: 'Meses do Ano'
//       }
//     }
//   }
// }
// };

// // Renderizando o gráfico
// const graficoProjetos = new Chart(
// document.getElementById('graficoProjetos'),
// config
// );

// Função de login
window.onload = function () {
  var userInfo = document.getElementById('user-info');
  var navButtons = document.getElementById('nav-buttons');
  var userNameSpan = document.getElementById('user-name');
  var userAvatar = document.getElementById('user-avatar');
  var imgprofile = document.getElementById('user-avatar');
  var nome = document.getElementById('user-name');
  
  // Verifica se o usuário está logado no localStorage
  if (localStorage.getItem('userLoggedIn') === 'true') {
    imgprofile.classList.remove('hidden');
    nome.classList.remove('hidden');
    userInfo.classList.remove('hidden');
    navButtons.classList.add('hidden'); 

    userNameSpan.textContent = localStorage.getItem('userName');
    userAvatar.src = localStorage.getItem('userAvatar');
  } else {
    userInfo.classList.add('hidden');
    navButtons.classList.remove('hidden'); 
    btnsair.classList.add('hidden');
    imgprofile.classList.add('hidden');
    nome.classList.add('hidden');
  }
};


// Função de login
function logar() {
  var login = document.getElementById('username').value;
  var senha = document.getElementById('password').value;
  var btnsair = document.getElementById('logout');

  // Referências para os elementos da navbar
  var navButtons = document.getElementById('nav-buttons');
  var userInfo = document.getElementById('user-info');
  var userNameSpan = document.getElementById('user-name');
  var userAvatar = document.getElementById('user-avatar');
  var popup = document.querySelector('.popup');
  var imgprofile = document.getElementById('user-avatar');
  var nome = document.getElementById('user-name');

  if (senha === 'adm123' && login === 'administrador') {
    alert('Login realizado com sucesso!');
    userNameSpan.textContent = 'Administrador'; 
    userAvatar.src = './img/admin-avatar.png'; 

    navButtons.classList.add('hidden'); 
    userInfo.classList.remove('hidden'); 
    popup.classList.add('hidden'); 
    imgprofile.classList.remove('hidden');
    nome.classList.remove('hidden');

    // Salva as informações no localStorage
    localStorage.setItem('userLoggedIn', 'true');
    localStorage.setItem('userName', 'Administrador');
    localStorage.setItem('userAvatar', './img/admin-avatar.png');
    location.reload();

  } else if (senha === 'dona123' && login === 'donatario01') {
    alert('Login realizado com sucesso!');
    userNameSpan.textContent = 'Donatário01'; 
    userAvatar.src = './img/donatario-avatar.png'; 
    navButtons.classList.add('hidden');
    userInfo.classList.remove('hidden');
    popup.classList.add('hidden');
    imgprofile.classList.remove('hidden');
    nome.classList.remove('hidden');
    location.reload();
    // Salva as informações no localStorage
    localStorage.setItem('userLoggedIn', 'true');
    localStorage.setItem('userName', 'Donatário01');
    localStorage.setItem('userAvatar', './img/donatario-avatar.png');
    location.reload();
  } else {
    alert('Login ou senha incorretos!');
  }
}

// Função de logout
function logout() {
  var navButtons = document.getElementById('nav-buttons');
  var userInfo = document.getElementById('user-info');
  var userNameSpan = document.getElementById('user-name');
  var userAvatar = document.getElementById('user-avatar');
  var imgprofile = document.getElementById('user-avatar');

  // Limpa o localStorage ao fazer logout
  localStorage.removeItem('userLoggedIn');
  localStorage.removeItem('userName');
  localStorage.removeItem('userAvatar');

  // Resetando as informações
  userNameSpan.textContent = ''; // Limpa o nome do usuário
  userAvatar.src = './img/avatar.png'; 
  userInfo.classList.add('hidden'); // Esconde a div de informações
  navButtons.classList.remove('hidden'); // Mostra os botões de login e cadastro
  imgprofile.classList.add('hidden');
  alert('Logout realizado com sucesso!');

  
  document.getElementById('sidebar').classList.remove('show');
  document.getElementById('sidebar').classList.add('hidden');
  localStorage.clear();
  location.reload(); 
};


// Script popup login
const openPopup = document.getElementById('openPopup');
const closePopup = document.getElementById('closePopup');
const popup = document.getElementById('popup');


openPopup.addEventListener('click', () => {
popup.classList.remove('hidden');
});

closePopup.addEventListener('click', () => {
popup.classList.add('hidden');
});

window.addEventListener('click', (e) => {
if (e.target === popup) {
popup.classList.add('hidden');
}
});

document.getElementById("navToggle").addEventListener("click", function () {
    const navbarContent = document.getElementById("navbarContent");
    navbarContent.classList.toggle("active");
});

// script carrosel
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    // Garantir que o índice esteja no intervalo válido
    if (index < 0) {
        currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    // Ajustar a posição dos slides
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Mostrar o primeiro slide ao carregar a página
showSlide(currentIndex);
// fim carrosel

function sidebar() {
  console.log('Avatar clicado'); // Depuração
  var sidebar = document.getElementById('sidebar');
  var sidebarAvatar = document.getElementById('sidebar-avatar');
  var sidebarUsername = document.getElementById('sidebar-username');
  var adminButtons = document.getElementById('admin-buttons');
  var donatarioButtons = document.getElementById('donatario-buttons');

  // Verifica se o sidebar existe
  if (!sidebar) {
    console.error('Elemento sidebar não encontrado!');
    return;
  }

  // Atualiza os dados da sidebar
  var avatar = localStorage.getItem('userAvatar') || './img/avatar.png';
  var name = localStorage.getItem('userName') || 'Usuário';

  sidebarAvatar.src = avatar;
  sidebarUsername.textContent = name;

  // Mostra botões conforme o perfil
  if (name === 'Administrador') {
    adminButtons.classList.remove('hidden');
    donatarioButtons.classList.add('hidden');
  } else {
    adminButtons.classList.add('hidden');
    donatarioButtons.classList.remove('hidden');
  }

  // Alterna a visibilidade da sidebar
  sidebar.classList.toggle('show');
}

const steps = document.querySelectorAll(".step");
const lines = document.querySelectorAll(".line");
const formSteps = document.querySelectorAll(".form-step");
const nextBtns = document.querySelectorAll(".next-btn");
const prevBtns = document.querySelectorAll(".prev-btn");

let currentStep = 0;

function updateFormStep(step) {
  // Atualizar a exibição das etapas do formulário
  formSteps.forEach((formStep, index) => {
    if (index === step) {
      formStep.classList.add("active");
    } else {
      formStep.classList.remove("active");
    }
  });

  // Atualizar a barra de progresso
  steps.forEach((stepEl, index) => {
    if (index <= step) {
      stepEl.classList.add("active");
    } else {
      stepEl.classList.remove("active");
    }
  });

  // Atualizar as linhas na barra de progresso
  lines.forEach((line, index) => {
    if (index < step) {
      line.classList.add("active");
    } else {
      line.classList.remove("active");
    }
  });
}

// Botões de avançar
nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (currentStep < formSteps.length - 1) {
      currentStep++;
      updateFormStep(currentStep);
    }
  });
});

// Botões de voltar
prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (currentStep > 0) {
      currentStep--;
      updateFormStep(currentStep);
    }
  });
});





