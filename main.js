function sw() {
  if (!('serviceWorker' in navigator)) {
  console.log('Service worker not supported');
  return;
}
navigator.serviceWorker.register('/sw.js')
.then(function(registration) {
  console.log('Registered at scope:', registration.scope);
})
.catch(function(error) {
  console.log('Registration failed:', error);
});

}
sw();

const amount = document.getElementById('amount');
const submitButtom = document.getElementById('submitButton');
document.getElementById('submitButton')
 .addEventListener('click', () => {
   console.log(amount.value)
 });

const api_url = "https://free.currencyconverterapi.com/api/v5/"
const fromCurrency = document.getElementById('fromCurrency').value;
const toCurrency = document.getElementById('toCurrency').value;
const currencyPair = `${fromCurrency}_${toCurrency}` || 'not getting currencies';
console.log(currencyPair);
function getResult(currencyPair, api_url){
   return fetch(api_url+`convert?q=${currencyPair}&compact=y`)
       .then(res => res.json())
       .then(data => {
       return result = data[currencyPair].val * amount;
       })
}
const currencyUrl = "https://free.currencyconverterapi.com/api/v5/currencies";

fetch(currencyUrl)
.then(function(res){
   return res.json();
})
.then(function(data){
   for (var key in data) {
     return data[key];
   }
   //console.log(data);
})
.then(function(datakey){
   for (const key2 in datakey) {
       const id = datakey[key2].id;
       $('.currencies').append($('<option>').text(id).attr('value', id));
   }
})
.catch(function(error){
   console.log(error);
})