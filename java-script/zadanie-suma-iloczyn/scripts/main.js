
// const liczby = [1,2,3,4,5,6];
// let sum = 0;
// let ilo = 1;

// liczby.forEach(function(element, index){
//     sum = sum + element;
//     ilo = ilo * element;
// });

// console.log(`suma = ` + sum);
// console.log(`iloczyn = ` +ilo);

const sumaIiloczyn = () => {
    const liczby = [1,2,3,4,5,6];
    let sum = 0;
    let ilo = 1;

    liczby.forEach(function(element, index){
    sum = sum + element;
    ilo = ilo * element;
    });

    console.log(`suma = ` + sum);
    console.log(`iloczyn = ` +ilo);
}

sumaIiloczyn();

