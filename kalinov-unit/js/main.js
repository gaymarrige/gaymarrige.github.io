document.querySelector('.nav-icon-wrapper').addEventListener('click', function () {
	document.querySelector('.nav-icon').classList.toggle('nav-icon--active');
	document.querySelector('.nav-icon-wrapper').classList.toggle('nav-wrapper--active');
});

const navIcon = document.querySelector('.nav-icon-wrapper');
const nav = document.querySelector('.nav');

navIcon.addEventListener('click', function () {
	nav.classList.toggle('nav--active');
});

// Находим ссылки внутри мобильной навигации
const navLinks = document.querySelectorAll('.nav__link');

// Обходим ссылки методом forEach
navLinks.forEach(function (item) {
	// Для каждой ссылки добавляем прослушку по событию "Клик"
	item.addEventListener('click', function () {
		document.querySelector('.nav-icon').classList.remove('nav-icon--active'); // Убираем активный класс у иконки моб. навигации
		document.querySelector('.nav-icon-wrapper').classList.remove('nav-wrapper--active');
		nav.classList.remove('nav--active'); // Убираем активный класс у блока моб. навигации
	});
});


const searchForm = document.querySelector('.search');
const searchBtn = document.querySelector('.search__btn');

searchBtn.addEventListener('click', function(event){
	if (!searchForm.classList.contains('search--visible')){
		event.preventDefault();
		searchForm.classList.toggle('search--visible');
	}
});