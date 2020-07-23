var mySwiper = new Swiper('.swiper-container', {
  loop: true,
    // autoplay: true,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
})

const burger = document.querySelector('.burger');
const toggleMenu = document.querySelector('.toggle-menu');
const closeButton = document.querySelector('.close-button');

function displayMenu(){
  toggleMenu.style.right = 0;
}

function closeMenu(){
  toggleMenu.style.right = '100%';
}

burger.addEventListener('click', displayMenu);
closeButton.addEventListener('click', closeMenu);