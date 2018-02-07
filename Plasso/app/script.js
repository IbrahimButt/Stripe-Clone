const hamburger = document.getElementById('hamburger');
const header = document.getElementById('header');
const productsButton = document.getElementById('productsButton');
const mainMenu = document.getElementById('mainMenu');


hamburger.addEventListener('click', function() {

  if (this.classList.contains('active'))
    this.classList.remove('active');
  else
    this.classList.add('active');

})

window.addEventListener('scroll', function() {

  if (scrollY < 30)
    header.classList.remove('shadowOnScroll');
  else
    header.classList.add('shadowOnScroll');
    
})

productsButton.addEventListener('click', function() {

  if (mainMenu.classList.contains('active'))
    mainMenu.classList.remove('active');
  else
    mainMenu.classList.add('active');
    
})