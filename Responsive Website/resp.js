burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')

burger.addEventListener('Click', ()=>{
navList.classList.toggle('v-class');
navbar.classList.toggle('h-nav');
})