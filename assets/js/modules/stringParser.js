const stringsWithNumber = document.querySelectorAll('.compare-item__number')

const stringParser = () => {
    stringsWithNumber.forEach(string => {
        const numberOfString = Number(string.textContent);
        const formattedNumber = new Intl.NumberFormat('ru').format(numberOfString);
        string.textContent = formattedNumber;
    })
};

export { stringParser }