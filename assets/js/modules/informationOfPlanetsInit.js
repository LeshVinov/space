import { planets } from "./planets.js";

// Секции информации
const diameterSection = document.querySelector('.diameter');
const weightSection = document.querySelector('.weight');
const satelliteSection = document.querySelector('.satellite');
const orbitSection = document.querySelector('.orbit');
const yearSection = document.querySelector('.year');
const temperatureSection = document.querySelector('.temperature');
const responseSection = document.querySelector('.response');

// Элементы внутри секций
const planetIMG = diameterSection.querySelectorAll('.compare-item__planet');
const planetDiameter = diameterSection.querySelectorAll('.compare-item__number');
const weightsOfPlanet = weightSection.querySelectorAll('.compare-item__number');
const listOfEarth = weightSection.querySelectorAll('.compare-item-wrap_with-list .compare-list');
const countOfSattelite = satelliteSection.querySelectorAll('.compare-item__number');
const listOfSattelites = satelliteSection.querySelectorAll('.compare-item-wrap_with-list .compare-list');
const distanceFromSun = orbitSection.querySelectorAll('.compare-item__number');
const planetDistanceIMG = orbitSection.querySelectorAll('.compare-orbit__img img');
const countOfdaysInYear = yearSection.querySelectorAll('.compare-item__number');
const temperature = temperatureSection.querySelectorAll('.compare-item__number');
const countOfResponses = responseSection.querySelectorAll('.compare-item__number');

// Вспомогательные функции
const setCompareSymbol = (section, value1, value2) => {
    const symbol = section.querySelector('.compare__symbol');
    if (value1 < value2) {
        symbol.setAttribute('src', './assets/img/icons/compare_less.svg');
    } else if (value1 > value2) {
        symbol.setAttribute('src', './assets/img/icons/compare_more.svg');
    } else {
        symbol.setAttribute('src', './assets/img/icons/compare_equal.svg');
    }
}

const renderList = (listElement, count, src) => {
    listElement.innerHTML = '';
    if (count >= 1) {
        for (let i = 0; i < count; i++) {
            listElement.innerHTML += `<img src="${src}" alt="изображение элемента" class="compare-list__item">`;
        }
    }
}

// Основная функция для инициализации информации о планетах
const informationOfPlanetsInitFunc = () => {
    const planetsMenus = document.querySelectorAll('.planets-list');
    planetsMenus.forEach((menu, index) => {
        const activeElement = menu.querySelector('.active');
        const valueOfPlanet = activeElement.getAttribute('data-planet_value');

        // Обновление секций
        updateDiameterSection(index, valueOfPlanet);
        updateWeightSection(index, valueOfPlanet);
        updateSatelliteSection(index, valueOfPlanet);
        updateOrbitSection(index, valueOfPlanet);
        updateYearSection(index, valueOfPlanet);
        updateTemperatureSection(index, valueOfPlanet);
        updateResponseSection(index, valueOfPlanet);
    });
}

// Функции для обновления секций
const updateDiameterSection = (index, valueOfPlanet) => {
    const currentPlanetIMG = planetIMG[index];
    const currentPlanetDiameter = planetDiameter[index];
    currentPlanetIMG.setAttribute('src', planets[valueOfPlanet].photo);
    currentPlanetIMG.style.width = `${((planets[valueOfPlanet].diameter / planets.jupiter.diameter) * 100) + 10}%`;
    currentPlanetDiameter.textContent = planets[valueOfPlanet].diameter;
    setCompareSymbol(diameterSection, Number(planetDiameter[0].textContent), Number(planetDiameter[1].textContent));
}

const updateWeightSection = (index, valueOfPlanet) => {
    const flooredWeight = Math.floor(planets[valueOfPlanet].weight);
    renderList(listOfEarth[index], flooredWeight, './assets/img/planets/earth.webp');
    weightsOfPlanet[index].textContent = planets[valueOfPlanet].weight;
    setCompareSymbol(weightSection, Number(weightsOfPlanet[0].textContent), Number(weightsOfPlanet[1].textContent));
}

const updateSatelliteSection = (index, valueOfPlanet) => {
    renderList(listOfSattelites[index], planets[valueOfPlanet].satellites, './assets/img/planets/satellite_left.svg');
    countOfSattelite[index].textContent = planets[valueOfPlanet].satellites;
    setCompareSymbol(satelliteSection, Number(countOfSattelite[0].textContent), Number(countOfSattelite[1].textContent));
}

const updateOrbitSection = (index, valueOfPlanet) => {
    const currentIMGofPlanetDistance = planetDistanceIMG[index];
    currentIMGofPlanetDistance.closest('.compare-orbit__img').style.left = `calc(25% + ${((100 - 25) / 8) * planets[valueOfPlanet].count - 5}%)`;
    currentIMGofPlanetDistance.setAttribute('src', planets[valueOfPlanet].photo);
    currentIMGofPlanetDistance.style.width = `${((planets[valueOfPlanet].diameter / planets.jupiter.diameter) * 100) + 10}%`
    distanceFromSun[index].textContent = planets[valueOfPlanet].orbit
    setCompareSymbol(orbitSection, Number(distanceFromSun[0].textContent), Number(distanceFromSun[1].textContent));
}

const updateYearSection = (index, valueOfPlanet) => {
    countOfdaysInYear[index].textContent = planets[valueOfPlanet].yearLength;
    setCompareSymbol(yearSection, Number(countOfdaysInYear[0].textContent), Number(countOfdaysInYear[1].textContent));
}

const updateTemperatureSection = (index, valueOfPlanet) => {
    temperature[index].textContent = planets[valueOfPlanet].temperature;
    setCompareSymbol(temperatureSection, Number(temperature[0].textContent), Number(temperature[1].textContent));
}

const updateResponseSection = (index, valueOfPlanet) => {
    const distanceInMillions = planets[valueOfPlanet].distanceFromEarth * Math.pow(10, 6);
    const speedInKilometersPerSecond = 5 / 3600;
    const timeToReach = distanceInMillions / speedInKilometersPerSecond
    const secondsInMinute = 2 * 60;
    const responseCount = timeToReach / secondsInMinute
    const responseInMillions = responseCount / Math.pow(10, 6)

    countOfResponses[index].textContent = responseInMillions

    setCompareSymbol(responseSection, Number(countOfResponses[0].textContent), Number(countOfResponses[1].textContent));
}

export { informationOfPlanetsInitFunc }
