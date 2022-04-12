
const literaString = (string, litera) => {
    
    let liczba = 0;
    let toLowerCase = string.toLowerCase();
    let tabString = toLowerCase.split('');
  
    tabString.forEach(element => {
        if(element == litera){
            liczba = liczba+1;
        }
    });
    console.log('Liter: ' + litera + ' w stringu: ' + string + ' jest: ' + liczba);
}

literaString("Akademia 108", "a");