
let jsonPracownicy = {
    "pracownicy":[
        {"firstName": "Krystian", "lastName": "Dziopa"}, 
        {"firstName": "Anna", "lastName": "Szapiel"},
        {"firstName": "Piotr", "lastName": "Żmuda"}
    ]
}

console.log(jsonPracownicy.pracownicy)

jsonPracownicy.pracownicy.forEach(function(element, index){
   console.log('Indeks: ' + index + ' Imię: ' + element.firstName + ' Nazwisko: ' + element.lastName);
});


