//Retornar un numero entre 0 y 1.
//10 20
//100 200

/*
    function generarNumeroRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min)  
  }
    generarNumeroRandom(10, 20);
*/
const seattle = {
    name: 'Seattle',
    address: '2901 3rd avenue #300, Seattle',
    openHour: '6am',
    closingHour: '7pm',
    cookiesPerHour: [], //array vacio
    maxCustomerPerHour: 50,
    estimate: function () {
        this.cookiesPerHour.push(generateRandomNumber(1, 1000))
    }
}
function generateRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}