//--------------burger
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

//----------popup
const cards = document.querySelectorAll('.card-testimonials');
const popup = document.querySelector('.popup');
const clousePopup = document.querySelector('.popup__clouse');

cards.forEach(function(card){
	card.addEventListener('click', function(){
	popup.classList.toggle('hid');
});
});

popup.addEventListener('click', function(event){
	if(event.target.classList.contains('popup')){
		popup.classList.toggle('hid');
	}
});

clousePopup.addEventListener('click', function(){
	popup.classList.toggle('hid');
});

//-----------slider pets
let images = document.querySelectorAll('.slider-pets__carts');
console
let current = 0;
const arrowRight = document.querySelector('.slider-pets__arrow-right');
const arrowLeft = document.querySelector('.slider-pets__arrow-left');

let random = images[Math.floor(Math.random() * images.length)];

function slider() {
	for (let i = 0; i < images.length; i++) {
		images[i].classList.add('hidden');
	}
	images[current].classList.remove('hidden');

};
slider();

arrowRight.addEventListener('click', function () {
	if( current + 1 === images.length){
		current = 0;
	} else {
		current++;
	}
	slider();
});

arrowLeft.addEventListener('click', function () {
	if( current - 1 === -1){
		current = images.length - 1;
	} else {
		current--;
	}
	slider();

});
	