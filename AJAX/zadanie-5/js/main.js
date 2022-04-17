
let kurs = 0;

$('#down').click(function(){
    $.getJSON('https://api.blockchain.com/v3/exchange/tickers')
    .done(function(data){

        $('#kurs p').text(data[31].last_trade_price)
        
        
        if(kurs == data[31].last_trade_price){
            $('#kurs p').append('<i class="fa fa-minus"></i>')
        }else if(kurs > data[31].last_trade_price){
            $('#kurs p').append('<i class="fa fa-arrow-down"></i>')
        }else if(kurs < data[31].last_trade_price){
            $('#kurs p').append('<i class="fa fa-arrow-up"></i>')
        };

        kurs = data[31].last_trade_price;

    });
    console.log(kurs);
});