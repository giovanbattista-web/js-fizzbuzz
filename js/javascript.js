// DICHIARAZIONE DELLE VARIABILI ED INSERIMENTO DEI VALORI

// STAMPA DEI NUMERI DA 1 A 100
for (let i = 1; i <= 100; i++) {
    console.log(i);
    if (i % 3 == 0) {
        console.log(`${i} Fizz`);
    }
    else
        if (i % 5 == 0) {
            console.log(`${i} Buzz`);
        }
}