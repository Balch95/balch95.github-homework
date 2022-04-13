
$('#button').click(function(){
    $('#kwadrat').animate({
        marginLeft: '100',
        width: '100',
        height: '100'
    }, 3000);
    $('#kwadrat').animate({
        backgroundColor: 'blue'
    }, 5000, function(){
        $('p').text('Animacja zakończona').css({
            'color' : 'white',
            'text-align': 'center',
        });
    });
    
});