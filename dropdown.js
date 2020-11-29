'use strict';

const dropdown = document.querySelectorAll('.dropdown');
const subNav = document.querySelector('.sub_nav');
const coffee = document.querySelector('.dropdown_coffee');
const menu = document.querySelector('.dropdown_menu');


subNav.addEventListener('mouseover', (event) => {
    const target = event.target;
    // if(target.classList[0] === 'sub_nav__coffee') {
    //     coffee.style.visibility = 'visible'; 
    //     coffee.style.height = `${440}px`;
    //     coffee.style.overflow ='hidden';
    // } else if(target.classList[0] !== 'sub_nav__coffee') {
    //     coffee.style.height = `${0}px`;
    //     coffee.style.overflow ='hidden';
    // }   
    switch(target.classList[0]) {
        case 'sub_nav__coffee':
            caseCoffee();
            break;
        case 'sub_nav__menu':
            caseMenu(); 
            break;  
        default :
        caseDefault();     
    }
});

function caseCoffee() {
    menu.style.height = `${0}px`;
    menu.style.overflow ='hidden';
    coffee.style.visibility = 'visible'; 
    coffee.style.height = `${440}px`;
    coffee.style.overflow ='hidden';
}

function caseMenu() {
    coffee.style.height = `${0}px`;
    coffee.style.overflow ='hidden';
    menu.style.visibility = 'visible'; 
    menu.style.height = `${440}px`;
    menu.style.overflow ='hidden';
}


function caseDefault() {
    dropdown.forEach(element => {
        element.style.height = `${0}px`;
        element.style.overflow ='hidden';
    });
}


// DropDown - MouseOver
coffee.addEventListener('mouseover',(event) => {
    const target = event.target;
    capture:true;
        caseCoffee();
});

menu.addEventListener('mouseover',(event) => {
    const target = event.target;
    capture:true;
        caseMenu();
});

dropdown.forEach(element => {
    element.addEventListener('mouseout',() => {
    element.style.height = `${0}px`;
    element.style.overflow ='hidden';
    });
});