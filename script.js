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

// Script Login

function  logar(){

var login = document.getElementById('username').value;
var senha = document.getElementById('password').value;

if(senha == 'adm123' && login == 'administrador'){
  alert('Sucess')
  popup.classList.add('hidden');
}else if(senha == 'dona123' && login == 'donatario01'){
  alert('Sucess')
  popup.classList.add('hidden');
}else{
  alert('Login ou Senha incorreto')
}

}
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