
let dane = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];

const babelkowanie = (tab) => {
    for(let i = 0; i<tab.length; i++){
        for(let j = 0; j<tab.length -i -1; j++){
            if(tab[j] > tab [j +1]){
                const tabA = tab[j +1];
                tab[j + 1] = tab [j];
                tab[j] = tabA;
            }
        }
    }

    return tab;
}


console.log(babelkowanie(dane));