let newsletterForm = document.getElementById('newsletter-form');
let allAgreeChecbox = document.getElementById('all-agree');

const validate = (event) =>{

    let txtname = document.getElementById('name');
    let txtemail = document.getElementById('email');
    let agree1 = document.getElementById('agree-1');
    let errors = document.getElementById('error');

    errors.innerHTML ='';

    if (txtname.value.trim() === ''){
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz Imię i Nazwisko!';
        errors.appendChild(liError);
    }

    if (txtemail.value.trim() === ''){
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz adres e-mail!';
        errors.appendChild(liError);
    }
    if (!txtemail.value.includes('@')){
        let liError = document.createElement('li');
        liError.innerText = 'Nierpawidłowy adres email!';
        errors.appendChild(liError);
    }
    if (!agree1.checked){
        let liError = document.createElement('li');
        liError.innerText = 'Nie wyraźiłeś zgody nr.1';
        errors.appendChild(liError);
    }

    if(errors.children.length > 0){
        event.preventDefault();
    }
    
    console.log(txtname, txtemail, agree1, errors);
};

const allAgree = (event) =>{
    let agree1 = document.getElementById('agree-1');
    let agree2 = document.getElementById('agree-2');
    agree1.checked = event.target.checked;
    agree2.checked = event.target.checked;

    agree1.disabled = event.target.checked;
    agree2.disabled = event.target.checked;

    console.log(event.target.checked)
};


newsletterForm.addEventListener('submit', validate);
allAgreeChecbox.addEventListener('change', allAgree);


// console.log(allAgreeChecbox);