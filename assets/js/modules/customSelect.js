import { gsapLoaderAnimation } from './animations.js';
import { informationOfPlanetsInitFunc } from './informationOfPlanetsInit.js'
import { stringParser } from './stringParser.js';

const planetLists = document.querySelectorAll('.planets-list');
const planetMenuButtons = document.querySelectorAll('.planets-group__button');

// Вспомогательнная функция переключеня классов
const classToggleFunction = (elem, className) => {
    elem.classList.toggle(className);
};

// Открытие меню выбора планет (кастомного селекта)
const planetListOpenFunction = () => {
    planetMenuButtons.forEach((planetMenuButton, index) => {    
        const planetItems = planetLists[index].querySelectorAll('.planets-list__item');
        const innerSpan = planetMenuButton.querySelector('span');
        
        planetLists[index].addEventListener('click', (e) => {
            if (e.target.classList.contains('planets-list__item')) {
                planetItems.forEach(item => item.classList.remove('active'));
                classToggleFunction(e.target, 'active');     
                innerSpan.textContent = e.target.textContent                
                classToggleFunction(planetLists[index], 'active');
                gsapLoaderAnimation()
                informationOfPlanetsInitFunc();
                stringParser();
            }
        })
   
        planetMenuButton.addEventListener('click', () => {
            classToggleFunction(planetLists[index], 'active');
        });
    });
};

export { planetListOpenFunction }