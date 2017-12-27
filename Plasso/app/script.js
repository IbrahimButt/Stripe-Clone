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