let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header');
const bg = document.querySelector('.bg');

burger.addEventListener('click', function(){
	burger.classList.toggle('active');
	menu.classList.toggle('active');
	bg.classList.toggle('active-color');
});

bg.addEventListener('click', function() {
	burger.classList.toggle('active');
   menu.classList.toggle('active');
	bg.classList.toggle('active-color');
});


// amount
const dots = document.querySelectorAll('.content-friend__dot');
const amount = document.querySelector('.content-friend__input');
console.log(amount);

amount.addEventListener('keyup', () => {
  dots.forEach((dot) => {dot.classList.remove('active');})

  if (amount.value == 5000) {
    dots.forEach((dot) => {dot.classList.remove('active');})
    dots[0].classList.add('active');
  };
  if (amount.value == 2000) {
    dots.forEach((dot) => {dot.classList.remove('active');})
    dots[1].classList.add('active');
  };
  if (amount.value == 1000) {
    dots.forEach((dot) => {dot.classList.remove('active');})
    dots[2].classList.add('active')
  };
  if (amount.value == 500) {
    dots.forEach((dot) => {dot.classList.remove('active');})
    dots[3].classList.add('active')
  };
  if (amount.value == 250) {
    dots.forEach((dot) => {dot.classList.remove('active');})
    dots[4].classList.add('active')
  };
  if (amount.value == 100) {
    dots.forEach((dot) => {dot.classList.remove('active');})
    dots[5].classList.add('active')
  };
  if (amount.value == 50) {
    dots.forEach((dot) => {dot.classList.remove('active');})
    dots[6].classList.add('active')
  };
  if (amount.value == 25) {
    dots.forEach((dot) => {dot.classList.remove('active');})
    dots[7].classList.add('active')
  };

  if (amount.value > 9999) {amount.value = 9999}
  if (amount.value < 0) {amount.value = 0}
});

dots.forEach((dot) => {
  dot.addEventListener('click', () => {
    if (dot.classList.contains('content-friend__dot_5000')) {
      dots.forEach((dot) => {dot.classList.remove('active');})
      dots[0].classList.add('active');
      amount.value = 5000
    }
    if (dot.classList.contains('content-friend__dot_2000')) {
      dots.forEach((dot) => {dot.classList.remove('active');})
      dots[1].classList.add('active');  
      amount.value = 2000}
    if (dot.classList.contains('content-friend__dot_1000')) {
      dots.forEach((dot) => {dot.classList.remove('active');})
      dots[2].classList.add('active');  
      amount.value = 1000
    }
    if (dot.classList.contains('content-friend__dot_500')) {
      dots.forEach((dot) => {dot.classList.remove('active');})
      dots[3].classList.add('active');  
      amount.value = 500
    }
    if (dot.classList.contains('content-friend__dot_250')) {
      dots.forEach((dot) => {dot.classList.remove('active');})
      dots[4].classList.add('active');  
      amount.value = 250
    }
    if (dot.classList.contains('content-friend__dot_100')) {
      dots.forEach((dot) => {dot.classList.remove('active');})
      dots[5].classList.add('active');  
      amount.value = 100
    }
    if (dot.classList.contains('content-friend__dot_50')) {
      dots.forEach((dot) => {dot.classList.remove('active');})
      dots[6].classList.add('active');  
      amount.value = 50
    }
    if (dot.classList.contains('content-friend__dot_25')) {
      dots.forEach((dot) => {dot.classList.remove('active');})
      dots[7].classList.add('active');  
      amount.value = 25
    }
  })
});