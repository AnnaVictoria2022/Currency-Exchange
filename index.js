// const api = {
//     endpoint:"https://www.amdoren.com/api/currency.php",
//     key: "RfU67Eqxi3diFBrzub4wFatgCf4DGT"
// }

//https://v6.exchangerate-api.com/v6/8f4457807a265fc51bf1c0f4/latest/USD

const api ={
    endpoint:"https://v6.exchangerate-api.com/v6/",
    key:"8f4457807a265fc51bf1c0f4"
}

const fromCurrency = document.querySelector('.currencyFrom');
const toCurrency = document.querySelector('.currencyTo');
const convertButton = document.querySelector('.btnConvert');
const buttonReset = document.querySelector('.btnReset');
let resultFrom;
let resultTo;

fromCurrency.addEventListener('change', (event) => {
resultFrom = `${event.target.value}`;
})

toCurrency.addEventListener('change', (event) => {
resultTo = `${event.target.value}`;
})

convertButton.addEventListener('click', calculate);
function calculate(){
    getRates();
}

    async function getRates(){
        const res = await fetch(`${api.endpoint}${api.key}/latest/${resultFrom}`);
        const resultRate = await res.json();
        displayResult(resultRate);
    }

    function displayResult(resultRate){
        const fromAmount = document.querySelector('.fromAmount').value;
        let toAmount = document.querySelector('.toAmount');
        toAmount.textContent = (fromAmount * `${resultRate.conversion_rates[resultTo]}`).toFixed(2);
    }
    
    buttonReset.addEventListener('click', reset);
    function reset(){
        window.location.reload();
    }







