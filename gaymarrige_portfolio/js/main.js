const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('header-nav--open')) {
        navBtnImg.src = "./../img/system/NAVCLOSE.svg";
    } else {
        navBtnImg.src = './../img/system/NAV.svg';
    }
}

const slider = document.querySelector('#slider');
const sliderItems = Array.from(slider.children);
const btnNext = document.querySelector('#btnNext');
const btnPrev = document.querySelector('#btnPrev');

sliderItems.forEach(function (slide, index){

	if (index !== 0) slide.classList.add('hidden');

	slide.dataset.index = index;

	sliderItems[0].setAttribute('data-active', '');

	slide.addEventListener('click', function(){
		this.classList.add('hidden');
		this.removeAttribute('data-active');

		let nextSlideIndex = index + 1 === sliderItems.length ? 0 : index + 1;
		/*if(index + 1 === sliderItems.length) {
			nextSlideIndex = 0;
		} else {
			nextSlideIndex = index + 1;
		}*/

		// const nextSlideIndex = +slide.dataset.index + 1;

		const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
		nextSlide.classList.remove('hidden');
		nextSlide.setAttribute('data-active', '');
	})
});

btnNext.onclick = function() {
	const currentSlide = slider.querySelector('[data-active]');
	const currentSlideIndex = +currentSlide.dataset.index;

	currentSlide.classList.add('hidden');
	currentSlide.removeAttribute('data-active');

	const nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
	const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);

	nextSlide.classList.remove('hidden');
	nextSlide.setAttribute('data-active', '');
}

btnPrev.onclick = function() {
	const currentSlide = slider.querySelector('[data-active]');
	const currentSlideIndex = +currentSlide.dataset.index;

	currentSlide.classList.add('hidden');
	currentSlide.removeAttribute('data-active');

	const prevSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
	const prevSlide = slider.querySelector(`[data-index="${prevSlideIndex}"]`);

	prevSlide.classList.remove('hidden');
	prevSlide.setAttribute('data-active', '');
};

AOS.init();