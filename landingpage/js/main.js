const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('header__nav-row--open')) {
        navBtnImg.src = "./../img/system/NAVCLOSE.svg";
    } else {
        navBtnImg.src = './../img/system/NAV.svg';
    }
}

AOS.init();