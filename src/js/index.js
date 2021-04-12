// Burger Menu

const burger = document.querySelector('.header__burger');
const logo = document.querySelector('.logo');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    logo.classList.toggle('active');
    nav.classList.toggle('active');
});

// Selected

const selected = document.querySelector('.selected');
const optionsContainer = document.querySelector('.selected-box__options');

const optionsList = document.querySelectorAll('.option');

selected.addEventListener('click', () => {
    selected.classList.toggle('active');
    optionsContainer.classList.toggle('active');
});

optionsList.forEach( o => {
    o.addEventListener('click', () => {
        selected.innerHTML = o.querySelector('label').innerHTML;
        selected.classList.remove('active');
        optionsContainer.classList.remove('active');
    })
})

// File

const realFileBtn = document.getElementById('file');
const customLabel = document.getElementById('file-label');
const customTxt = document.getElementById('file-text');

realFileBtn.addEventListener('change', function() {
    if (realFileBtn.value) {
        customTxt.innerHTML = realFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
    } else {
        customTxt.innerHTML = 'Прикрепить файл';
    }
})