// DICHIARAZIONE DELLE VARIABILI ED INSERIMENTO DEI VALORI
let multiploTreCinque = "FizzBuzz";
let multiploTre = "Fizz";
let multiploCinque = "Buzz";
// STAMPA DEI NUMERI DA 1 A 100
for (let i = 1; i <= 100; i++) {
    // SE QUALCHE NUMERO E' MULTIPLO DI 3 O DI 5 BISOGNA STAMPARE LA STRINGA "FizzBuzz" INVECE DEL NUMERO 
    if ((i % 3 == 0) && (i % 5 == 0)) {
                     console.log(multiploTreCinque);
    }
    // ALTRIMENTI SE QUALCHE NUMERO E' MULTIPLO DI 3 BISOGNA STAMPARE LA STRINGA "Fizz"
    else if (i % 3 == 0) {
        console.log(multiploTre);
    }
    // ALTRIMENTI SE QUALCHE NUMERO E' MULTIPLO DI 5 BISOGNA STAMPARE LA STRINGA "Buzz"
    else
        if (i % 5 == 0) {
            console.log(multiploCinque);
        }
        else {
            console.log(i);
        }
}