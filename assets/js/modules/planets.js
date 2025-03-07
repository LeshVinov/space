const planets = {
    mercury: {
        name: 'Меркурий',
        photo: './assets/img/planets/mercury.webp',
        diameter: 4879.4,
        weight: 0.055, 
        satellites: 0,
        orbit: 57.9, 
        yearLength: 88,
        temperature: 178,
        distanceFromEarth: 91.6,
        count: 1
    },
    venus: {
        name: 'Венера', 
        photo:'./assets/img/planets/venus.webp',
        diameter: 12103.6, 
        weight: 0.815,
        satellites: 0,
        orbit: 108.2, 
        yearLength: 225, 
        temperature: 462,
        distanceFromEarth: 41.4,
        count: 2
    },
    earth: {
        name: 'Земля',
        photo:'./assets/img/planets/earth.webp',
        diameter: 12742, 
        weight: 1, 
        satellites: 1,
        orbit: 149.6, 
        yearLength: 365.25, 
        temperature: 15,
        distanceFromEarth: 0,
        count: 3
    },
    mars: {
        name: 'Марс',
        photo:'./assets/img/planets/mars.webp',
        diameter: 6780, 
        weight: 0.107,
        satellites: 2,
        orbit: 227.9, 
        yearLength: 687,
        temperature: -67,
        distanceFromEarth: 78.3,
        count: 4
    },
    jupiter: {
        name: 'Юпитер',
        photo:'./assets/img/planets/jupiter.webp',
        diameter: 139822,
        weight: 317.8,
        satellites: 92,
        orbit: 778.3,
        yearLength: 4333,
        temperature: -150,
        distanceFromEarth: 628.4,
        count: 5
    },
    saturn: {
        name: 'Сатурн',
        photo:'./assets/img/planets/saturn.webp',
        diameter: 116464,
        weight: 95.2,
        satellites: 146,
        orbit: 1427,
        yearLength: 10759,
        temperature: -178,
        distanceFromEarth: 1277.4,
        count: 6
    },
    uranus: {
        name: 'Уран',
        photo:'./assets/img/planets/uranus.webp',
        diameter: 50724, 
        weight: 14.5, 
        satellites: 27,
        orbit: 2870, 
        yearLength: 30687, 
        temperature: -216,
        distanceFromEarth: 2721.4,
        count: 7
    },
    neptune: {
        name: 'Нептун',
        photo:'./assets/img/planets/neptune.webp',
        diameter: 49244, 
        weight: 17.1, 
        satellites: 14,
        orbit: 4497,
        yearLength: 60190, 
        temperature: -224,
        distanceFromEarth: 4347.4,
        count: 8
    }
};

export { planets }