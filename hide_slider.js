'use strict';

const hideBtn = document.querySelector('.hide_btn');
const hideSlide = document.querySelector('.hide_slide');
const slideList = document.querySelector('.hide_slide-list');
const slideBox = document.querySelector('.hide_slide-box');
const nextBtn = document.querySelector('.right_swiper')
const prevBtn = document.querySelector('.left_swiper')

const itemSize = 820;

slideList.style.width = `${4100}px`;

let currentNum = 1;

let First = slideList.firstElementChild;
let Last = slideList.lastElementChild;
let cloneFirst = First.cloneNode(true);
let cloneLast = Last.cloneNode(true);
slideList.insertBefore(cloneLast, slideList.firstElementChild);
slideList.appendChild(cloneFirst);


nextBtn.addEventListener('click', () => {
    // if(currentNode.classList[1] !== 'active') {
    //     return;
    // }
    console.log(`전 ${currentNum}`);
    slideList.style.transform = `translateX(${-itemSize * currentNum}px)`;
    currentNum++;
    console.log(`현재 ${currentNum}`);

    if(currentNum > 3) {
        currentNum = 1;
        console.log(`오버 ${currentNum}`);
    }
});




hideBtn.addEventListener('click', () => {
    if(hideSlide.classList[1] == 'close'){
    // hideSlide.style.visibility = `visible`;
    hideSlide.style.height = `${658}px`;
    hideSlide.classList.remove('close');
    } else {
    // hideSlide.style.visibility = `hidden`;
    hideSlide.style.height = `${0}px`;
    hideSlide.classList.add('close');
    
    }
});

