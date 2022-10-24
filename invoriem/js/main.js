$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    dots: false,
    margin: 48,
    loop: true,
    responsive : {
    // breakpoint from 0 up
    0 : {
        items: 2,
        margin: 32,
        margin: 178,
    },
    // breakpoint from 480 up
    701 : {
        items: 3,
        margin: 148,
    },
    // breakpoint from 768 up
    1001 : {
        items: 3,
    }
}
  });
});

const videoBtn = document.querySelector('#video-btn');
const videoPicture = document.querySelector('.video__picture');
const videoWrapper = document.querySelector('.video');
const video = document.querySelector('#video-file');

videoBtn.addEventListener('click', function(){
  videoPicture.classList.add('none');
  videoWrapper.classList.remove('video-overlay');
  videoBtn.classList.add('none');

  if (video.paused) {
    video.play();
  }
})

video.addEventListener('click', function(){
  videoWrapper.classList.add('video-overlay');
  videoBtn.classList.remove('none');
  video.pause();
})

const openNavBtn = document.querySelector('#openMobileNav');
const mobileNav = document.querySelector('#mobileNav');
const closeNavBtn = document.querySelector('#closeMobileNav');

openNavBtn.onclick = function (){
  mobileNav.classList.remove('none');
  document.body.classList.add('no-scroll');
};

closeNavBtn.onclick = function () {
  mobileNav.classList.add('none');
  document.body.classList.remove('no-scroll');
};

