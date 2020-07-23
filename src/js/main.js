var mySwiper = new Swiper('.swiper-container', {
  loop: true,
    autoplay: true,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
})

const header = document.querySelector('header');
const links = header.querySelectorAll('a');
const burger = document.querySelector('.burger');
const toggleMenu = document.querySelector('.toggle-menu');
const closeButton = document.querySelector('.close-button');
console.log(links)

function displayMenu(){
  toggleMenu.style.left = '10vh';
  toggleMenu.style.right = '0';
}

function closeMenu(){
  toggleMenu.style.left = '100vw';
}

burger.addEventListener('click', displayMenu);
closeButton.addEventListener('click', closeMenu);


window.addEventListener('scroll', function(){
  if(window.scrollY > 7){
    header.style.background = "#fff";
    header.style.padding = "1rem 0";
    header.style.boxShadow = "4px 0 20px -5px rgba(0, 0, 0, 0.2)";
    links.forEach(link => link.style.color = "#000");
  } 
  if(window.scrollY == 0){
    header.style.background = "transparent";
    header.style.color = "#fff";
    header.style.padding = "1.5rem 0";
    links.forEach(link => link.style.color = "rgba(255, 255, 255, 0.5)");
  }
})
