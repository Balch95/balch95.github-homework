 
 let form = document.getElementById('form');

 const submitForm = (event) =>{
     event.preventDefault(); //zatrzymuje działanie

     let fname = document.querySelector('[name="fname"]');
     let lname = document.querySelector('[name="lname"]');
    console.log(`Imię: ${fname.value}, Nazwisko: ${lname.value}`);

};

form.addEventListener('submit', submitForm);
 

