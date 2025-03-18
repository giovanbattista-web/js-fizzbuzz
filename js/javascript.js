// DICHIARAZIONE DELLE VARIABILI ED INSERIMENTO DEI VALORI
let multiploTreCinque = "FizzBuzz";
let multiploTre = "Fizz";
let multiploCinque = "Buzz";
// STAMPA DEI NUMERI DA 1 A 100
for (let i = 1; i <= 100; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
                     console.log(multiploTreCinque);
    }
    else if (i % 3 == 0) {
        console.log(multiploTre);
    }
    else
        if (i % 5 == 0) {
            console.log(multiploCinque);
        }
        else {
            console.log(i);
        }
}