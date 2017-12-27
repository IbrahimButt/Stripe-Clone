var membershipBottom = document.getElementById('membershipBottom');
var membershipTop = document.getElementById('membershipTop');

var billingBottom = document.getElementById('billingBottom');
var billingTop = document.getElementById('billingTop');

var slides = document.getElementById('slides');
  slides.addEventListener('click', function () {
  membershipBottom.outerHTML = '<div class="slides__background__bottom--membership" id="membershipBottom"></div>';
  membershipTop.outerHTML = '<div class="slides__background__top--membership" id="membershipTop"></div>';
  
  billingBottom.outerHTML = '<div class="slides__background__bottom--billing is-active" id="billingBottom"></div>';
  billingTop.outerHTML = ' <div class="slides__background__top--billing is-active" id="billingTop"></div>';
});

// // First we detect the click event
// document.getElementById('the-box').addEventListener('click', function () {
//   // Using an if statement to check the class
//   if (this.classList.contains('bad')) {
//     // The box that we clicked has a class of bad so let's remove it and add the good class
//    this.classList.remove('bad');
//    this.classList.add('good');
//   } else {
//     // The user obviously can't follow instructions so let's alert them of what is supposed to happen next
//     alert("You can proceed!");
//   }
// });