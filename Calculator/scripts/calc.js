let calculation = localStorage.getItem('calculation') || '';
displayCalcalculation();  // Display the initial calculation in the display area

function updateCalculation(value)
{
    calculation += value;

    localStorage.setItem('calculation', calculation);
    displayCalcalculation(); 
}

function resetCalculation() {
    calculation = '';
    localStorage.removeItem('calculation');
    document.querySelector('.js-displayCalc')
        .textContent = `Calculator has been reset`;
    
}

function displayCalcalculation() {
    document.querySelector('.js-displayCalc')
        .textContent = calculation;
}