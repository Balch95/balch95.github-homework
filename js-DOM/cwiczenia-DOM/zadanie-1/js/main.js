let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];

let div = document.getElementById('div')

let olElement = document.createElement('ol');



cities.forEach(element =>{
    let liElement = document.createElement('li');
    liElement.className = 'city';
    liElement.textContent = element;
    olElement.appendChild(liElement); 
})
div.appendChild(olElement);
