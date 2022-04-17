

let endOfPage = 0;

let preloading = false;

const showePreloader = () =>{
    let preloader = document.getElementById('preloader');
    preloader.style.display = 'block';
    preloading = true;
};


const hidePreloader = () =>{
    let preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
    preloading = false;
};


const getData = () =>{
    
    if(!preloading){

        showePreloader();

        fetch('https://akademia108.pl/api/ajax/get-users.php')
        .then(res => res.json())
        .then(data => {

            let body = document.body;
            let hr = document.createElement('hr')

            body.appendChild(hr);

            for (const user of data) {
                let pId = document.createElement('p');
                let pName = document.createElement('p');
                let pWebsite = document.createElement('p');
                

                pId.innerText = `User ID: ${user.id}`;
                pName.innerText = `User Name: ${user.name}`;
                pWebsite.innerHTML = `User URL: ${user.website}<br />--------`;

                

                body.appendChild(pId);
                body.appendChild(pName);
                body.appendChild(pWebsite);

            };
    
            hidePreloader();
        })
        .catch(error => {
            console.error(error);
        });
    };
    
    
};

const scrollToEndOfPage = () => {

    let d = document.documentElement;
    let scrollHeight = d.scrollHeight;
    let scrollTop = d.scrollTop;
    let clientHeight = d.clientHeight;
    let sumScrollTopCLientHeight = Math.ceil(scrollTop + clientHeight);

    if(sumScrollTopCLientHeight >= scrollHeight){
        endOfPage += 1;

        
        getData();
    };

    
};

window.addEventListener('scroll', scrollToEndOfPage);