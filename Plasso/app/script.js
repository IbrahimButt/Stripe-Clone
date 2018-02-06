var hamburger = document.getElementById('hamburger');
var header = document.getElementById('header')

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