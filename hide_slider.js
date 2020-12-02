'use strict';

const hideBtn = document.querySelector('.hide_btn');
const hideSlide = document.querySelector('.hide_slide');
const slideList = document.querySelector('.hide_slide-list');
const slideBox = document.querySelector('.hide_slide-box');
const nextBtn = document.querySelector('.right_swiper')
const prevBtn = document.querySelector('.left_swiper')
const slideItem = document.querySelectorAll('.hide_slide-item');

const itemSize = 840;


slideList.style.width = `${itemSize * 7}px`;

let currentNum = 1;
slideList.style.transform = `translateX(-${itemSize * (currentNum)}px)`;

let Second = slideList.childNodes[5];
let cloneSecond_1 = Second.cloneNode(true);
let cloneSecond_2 = Second.cloneNode(true);
slideList.appendChild(cloneSecond_1);
slideList.insertBefore(cloneSecond_2, slideList.firstElementChild);

let curSlide = slideItem[currentNum];
curSlide.classList.add('active');


nextBtn.addEventListener('click', () => {
    if(curSlide.classList[1] !== 'active') {
        return;
    }

    if(currentNum >= 0){
        slideList.style.transition = `${300}ms`
        slideList.style.transform = `translateX(-${itemSize * (currentNum + 1)}px)`;
        if(currentNum == 3) {
            curSlide.classList.remove('active');
            setTimeout(() => {
                currentNum = 1;
                slideList.style.transition = `${0}ms`
                slideList.style.transform = `translateX(-${itemSize * (currentNum)}px)`;
                curSlide = slideItem[currentNum];
                curSlide.classList.add('active'); 
            }, 300);
        }
    }

    if(currentNum !== 3){
        curSlide.classList.remove('active');
        curSlide = slideItem[++currentNum];
    setTimeout(() => {
        curSlide.classList.add('active');            
    }, 300);
}
});


prevBtn.addEventListener('click', () => {
    if(curSlide.classList[1] !== 'active') {
        return;
    }

    if(currentNum >= 0){
        slideList.style.transition = `${300}ms`
        slideList.style.transform = `translateX(-${itemSize * (currentNum - 1)}px)`;
    }

    if(currentNum !== 0){
        curSlide.classList.remove('active');
        curSlide = slideItem[--currentNum];
        if(currentNum == 0) {
            curSlide.classList.remove('active');
            setTimeout(() => {
                currentNum = 3;
                slideList.style.transition = `${0}ms`
                slideList.style.transform = `translateX(-${itemSize * (currentNum)}px)`;
                curSlide = slideItem[currentNum];
            }, 300);
        }
    setTimeout(() => {
        curSlide.classList.add('active');            
    }, 300);
}
});

hideBtn.addEventListener('click', () => {
    if(hideSlide.classList[1] == 'close'){
    hideSlide.style.height = `${658}px`;
    hideSlide.classList.remove('close');
    } else {
    hideSlide.style.height = `${0}px`;
    hideSlide.classList.add('close');
    
    }
});

