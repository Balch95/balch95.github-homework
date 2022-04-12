const sumaKwadratow = () => {
    const liczby = [0,1,2,3,4,5];
    let suma = 0;
    

    liczby.forEach(function(element){
        suma +=Math.pow(element, element);
    


    });

    console.log(`suma = ` + suma);
}

sumaKwadratow();