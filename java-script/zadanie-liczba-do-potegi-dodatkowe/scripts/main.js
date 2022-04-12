
const doPotegi = (podstawa, wykladnik) => {
    
    let wynik = 1;
    let tablica = [];
    tablica[0] = podstawa;
    tablica[1] = wykladnik;

    for (let i=0; i<tablica[1]; i++) {
        wynik *= tablica[0];
    }
    console.log('Wynik potęgowania ' + podstawa + ' do potęgi ' + wykladnik + ' jest równy :' + wynik);
}

doPotegi(2,10);