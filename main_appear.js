'use strict';

const innerSet = document.querySelectorAll('.inner-set');
const innerSlogan = document.querySelector('.main__inner-slogan');
const btnSlogan  = document.querySelector('.btn_slogan');
const headerHeight = document.querySelector('.header').getBoundingClientRect().height;
const HideSlide = document.querySelector('.hide_slide');



function delay(time, index, node) {
    if(node == undefined){
        setTimeout(() => {
            innerSet[index].style.opacity = '1';
        }, time);
    }
    
    if(node == innerSlogan) {
        setTimeout(() => {
            node.style.opacity = '1';
        }, time);
    }

    if(node == btnSlogan) {
        setTimeout(() => {
            node.style.opacity = '1';
        }, time);
    }
};

function appearContent() {
    delay(500, 1, undefined);
    delay(1000, 3, undefined);
    delay(1500, 2, undefined);
    delay(2000, 4, undefined);
    delay(2500, 0, undefined);
    delay(3000, 0, innerSlogan);
    delay(3500, 0, btnSlogan);
}

appearContent();

// Interactive
const blendImg = document.querySelector('.blend_img-box');
const blendText = document.querySelector('.blend_text-box');
const favoriteText_01 = document.querySelector('.favorite__text_01');
const favoriteText_02 = document.querySelector('.favorite__text_02');
document.addEventListener('scroll', () => {

    if(hideSlide.classList[1] === 'close' && window.scrollY > 100){
        moveBlend();
    } 
    else if(hideSlide.classList[1] !== 'close' && window.scrollY > 740){
        moveBlend();
    } else {
        defaultBlend();
    }    

    if(hideSlide.classList[1] === 'close' && window.scrollY > 1050){
        moveFavorite();
    } 
    else if(hideSlide.classList[1] !== 'close' && window.scrollY > 1750){
        moveFavorite();
    } else {
        defaultFavorite();
    }
});


function moveBlend() {
    blendImg.style.transform = `translate(-${90}px)`;
    blendText.style.transform = `translate(-${70}px)`;
    blendImg.style.opacity = '1';
    blendText.style.opacity = '1';
}

function moveFavorite() {
    setTimeout(() => {
        favoriteText_01.style.transform = `translate(${150}px)`;
    }, 100);
    favoriteText_02.style.transform = `translate(${50}px)`;
    favoriteText_01.style.opacity = '1';
    favoriteText_02.style.opacity = '1';
}

function defaultBlend() {
    blendImg.style.transform = `translate(-${1000}px)`;
    blendText.style.transform = `translate(${800}px)`;
    blendImg.style.opacity = '0';
    blendText.style.opacity = '0';
}

function defaultFavorite() {
    favoriteText_01.style.transform = `translate(-${1000}px)`;
    favoriteText_02.style.transform = `translate(-${1000}px)`;
    favoriteText_01.style.opacity = '0';
    favoriteText_02.style.opacity = '0';
}