$(document).ready(function(){

    $('body').append('<button id=button-down>W dół');

    $('#button-down').insertAfter('#button-up');


    $('#button-up').click(function(){
        $('p:last').insertBefore('p:first');
    });


    $('#button-down').click(function(){
        $('p:first').insertAfter('p:last');
    });
});

