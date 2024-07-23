//clicking on the triple dash button while in phone screen: 
const navbarNav = document.querySelector('.navbar-nav');
const openNavbar = document.querySelector('.js-open-button');
const closeNavbar = document.querySelector('.js-close-button');

openNavbar.addEventListener('click', () => {
  openNavbar.style.display = 'none'; 
  closeNavbar.style.display = 'block';
  navbarNav.classList.toggle('active');
});

closeNavbar.addEventListener('click', () => {
  openNavbar.style.display = 'block'; 
  closeNavbar.style.display = 'none';
  navbarNav.classList.toggle('active');
});

//event listener on hovering for blog posts.  