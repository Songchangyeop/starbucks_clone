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


const blendImg = document.querySelector('.blend_img-box');
const blendText = document.querySelector('.blend_text-box');
document.addEventListener('scroll', () => {
    
    if(hideSlide.classList[1] === 'close' && window.scrollY > 100){
        blendImg.style.transform = `translate(-${90}px)`;
        blendText.style.transform = `translate(-${70}px)`;
    } else if(hideSlide.classList[1] !== 'close' && window.scrollY > 740){
        blendImg.style.transform = `translate(-${90}px)`;
        blendText.style.transform = `translate(-${70}px)`;
    } else {
        blendImg.style.transform = `translate(-${1000}px)`;
        blendText.style.transform = `translate(${800}px)`;
    }
});