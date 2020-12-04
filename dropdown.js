'use strict';

const dropdown = document.querySelectorAll('.dropdown');
const subNav = document.querySelector('.sub_nav');
const coffee = document.querySelector('.dropdown_coffee');
const menu = document.querySelector('.dropdown_menu');
const navCoffee = document.querySelector('.sub_nav__coffee');
const navMenu = document.querySelector('.sub_nav__menu');

subNav.addEventListener('mouseover', (event) => {
    const target = event.target;

    switch(target.classList[0]) {
        case 'sub_nav__coffee':
            caseCoffee();
            break;
        case 'sub_nav__menu':
            caseMenu(); 
            break; 
        case 'sub_nav__store':
            caseCoffee(); 
            break;
        case 'sub_nav__responsibility':
            caseMenu(); 
            break;
        case 'sub_nav__rewards':
            caseCoffee(); 
            break;
        case 'sub_nav__new':
            caseMenu(); 
            break;            
        default :
        caseDefault();     
    }
});

function caseCoffee() {
    navMenu.classList.remove('mouseover');
    navCoffee.classList.add('mouseover');
    menu.style.height = `${0}px`;
    menu.style.overflow ='hidden';
    coffee.style.visibility = 'visible'; 
    coffee.style.height = `${440}px`;
    coffee.style.overflow ='hidden';
}

function caseMenu() {
    navCoffee.classList.remove('mouseover');
    navMenu.classList.add('mouseover');
    coffee.style.height = `${0}px`;
    coffee.style.overflow ='hidden';
    menu.style.visibility = 'visible'; 
    menu.style.height = `${440}px`;
    menu.style.overflow ='hidden';
}


function caseDefault() {
    navCoffee.classList.remove('mouseover');
    navMenu.classList.remove('mouseover');
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

// DropDown - MouseOut
dropdown.forEach(element => {
    element.addEventListener('mouseout',() => {
    element.style.height = `${0}px`;
    element.style.overflow ='hidden';
    navCoffee.classList.remove('mouseover');
    navMenu.classList.remove('mouseover');
    });
});