
class Ksiazka {
    constructor(tytul, autor, przeczytana){
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = przeczytana;
    };

     opiszKsiazke = () => {
        if(this.przeczytana == true){
        return 'Książka ma tytul ' + this.tytul + ', autorem jest ' + this.autor + ' i została przeczytana';
        }else{
         return 'Książka ma tytul ' + this.tytul + ', autorem jest ' + this.autor + ' do przeczytania';
        }
    }   
};

let wiedzmin = new Ksiazka ('Wiedźmin', 'Sapkowski', true);
let ogniemImieczem = new Ksiazka ('Ogniem i mieczem', 'Sienkiewicz', false);
let jaInkwizytor = new Ksiazka ('Ja Inkwizytor', 'Piekara', false);

let lista = [];
lista[0] = wiedzmin;
lista[1] = ogniemImieczem;
lista[2] = jaInkwizytor;


const iloscPrzeczytanych = (book) => {
    let n = 0;
    for (let index = 0; index < book.length; index++) {
        if(book[index].przeczytana == true){
            n = n+1
        }
        console.log(book[index].opiszKsiazke())
    }
    console.log('Ilość przeczytanych książek: ' +n)
};

iloscPrzeczytanych(lista);


