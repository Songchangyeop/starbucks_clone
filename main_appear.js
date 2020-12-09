'use strict';

const innerSet = document.querySelectorAll('.inner-set');
const innerSlogan = document.querySelector('.main__inner-slogan');
const btnSlogan  = document.querySelector('.btn_slogan');
const headerHeight = document.querySelector('.header').getBoundingClientRect().height;

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
