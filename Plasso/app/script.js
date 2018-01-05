var hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', function() {
  if (this.classList.contains('active')) {
    this.classList.remove('active');
  } else {
    this.classList.add('active');
  }
})