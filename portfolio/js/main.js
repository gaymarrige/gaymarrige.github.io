// Parallax

var scene = document.getElementById('contacts');
var parallax = new Parallax(scene);

// MixItUp

$(document).ready(function(){

	let containerEl = document.querySelector("#mix-cards");

	let mixer = mixitup(containerEl, {
		classNames: {
			block: ""
		}
	});

});

// BackTopBtn

const backBtn = document.querySelector("#backbtn");

document.addEventListener('scroll', function(){
	if (window.pageYOffset > 300){
		backBtn.classList.remove('none');
	} else {
		backBtn.classList.add('none');
	}
});

// OnePageNav

const oneNav = document.querySelector('#nav');

$('#nav').onePageNav({
	currentClass: 'current',
	changeHash: false,
	scrollSpeed: 750,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing'
});

// MobileNav

const navIcon = document.querySelector('.nav-m');
const nav = document.querySelector('.nav');

navIcon.addEventListener('click', function () {
	this.classList.toggle('nav-m--active');
	nav.classList.toggle('nav--active');
	oneNav.classList.toggle('none');
	if (backBtn.classList.contains('none')){
		
	} else {
		backBtn.classList.add('none');
	}
});

// Находим ссылки внутри мобильной навигации
const navLinks = document.querySelectorAll('.nav a');

// Обходим ссылки методом forEach
navLinks.forEach(function (item) {
	// Для каждой ссылки добавляем прослушку по событию "Клик"
	item.addEventListener('click', function () {
		navIcon.classList.remove('nav-m--active'); // Убираем активный класс у иконки моб. навигации
		nav.classList.remove('nav--active'); // Убираем активный класс у блока моб. навигации
	})
});


