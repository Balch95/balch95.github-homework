

document.getElementById('button').addEventListener('click', ()=>{
    let liElement = document.createElement('li');
    let value = document.getElementsByClassName('item').length;
    liElement.innerText = 'Item ' + (value+1);
    liElement.classList.add ('item');
    document.getElementById('items').appendChild(liElement);
});








