'use strict';

const HideSlide = document.querySelector('.hide_slide');
const blendImg = document.querySelector('.blend_img-box');
const blendText = document.querySelector('.blend_text-box');
const favoriteText_01 = document.querySelector('.favorite__text_01');
const favoriteText_02 = document.querySelector('.favorite__text_02');
const magazineText = document.querySelector('.magazine_right');
const magazineBtn = document.querySelector('.magazine_right__btn');
const storeText_01 = document.querySelector('.store__textbox__text01');
const storeText_02 = document.querySelector('.store__textbox__text02');
const storeBtn = document.querySelector('.store__textbox__btn');

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

    if(hideSlide.classList[1] === 'close' && window.scrollY > 1800){
        moveMagazine();
    } 
    else if(hideSlide.classList[1] !== 'close' && window.scrollY > 2450){
        moveMagazine();
    } else {
        defaultMagazine();
    }

    if(hideSlide.classList[1] === 'close' && window.scrollY > 2500){
        moveStore();
    } 
    else if(hideSlide.classList[1] !== 'close' && window.scrollY > 3150){
        moveStore();
    } else {
        defaultStore();
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

function moveMagazine() {
    setTimeout(() => {
        magazineText.style.transform = `translate(${20}px, -${20}px)`;
    }, 50);
    magazineBtn.style.transform = `translate(-${138}px, ${100}px)`;
    magazineText.style.opacity = '1';
    magazineBtn.style.opacity = '1';
}

function moveStore() {
    storeText_01.style.transform = `translate(${0})`;
    setTimeout(() => {
        storeText_02.style.transform = `translate(${0})`;
    }, 50);
    setTimeout(() => {   
        storeBtn.style.transform = `translate(${0})`;
    }, 100);
    storeText_01.style.opacity = '1';
    storeText_02.style.opacity = '1';
    storeBtn.style.opacity = '1';
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

function defaultMagazine() {
    magazineText.style.transform = `translate(${800}px, -${20}px)`;
    magazineBtn.style.transform = `translate(${800}px), ${100}px`;
    magazineText.style.opacity = '0';
    magazineBtn.style.opacity = '0';
}

function defaultStore() {
    storeText_01.style.transform = `translate(${800}px)`;
    storeText_02.style.transform = `translate(${800}px`;
    storeBtn.style.transform = `translate(${800}px`;
    storeText_01.style.opacity = '0';
    storeText_02.style.opacity = '0';
    storeBtn.style.opacity = '0';
}

// Change Background Color of Magazine Button
const magazineBtnimg = document.querySelector('.magazine_right__btn-img');
magazineBtn.addEventListener('mouseover', () => {
    magazineBtnimg.style.transform = `translateY(-${50}%)`;
    magazineBtn.style.backgroundColor = `#976d3f`;
});

magazineBtn.addEventListener('mouseout', () => {
    magazineBtnimg.style.transform = `translateY(${0})`;
    magazineBtn.style.backgroundColor = ``;
});