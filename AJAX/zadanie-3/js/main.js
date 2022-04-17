console.log('Warsztat jQuerry AJAX')

$(document).ready(function(){

    //Wartiant 1
    // $('#get-data').click(function(){
    //     $.get('https://akademia108.pl/api/ajax/get-post.php')
    //     .done(function(data){

    //         let pId = $('<p></p>').text(`Post ID: ${data.id}`);
    //         let pUserId = $('<p></p>').text(`Post ID: ${data.userID}`);
    //         let pTitle = $('<p></p>').text(`Post ID: ${data.title}`);
    //         let pBody = $('<p></p>').text(`Post ID: ${data.body}`);
    //         let hr = $('<hr />');

    //         let jqBody = $('body');

    //         jqBody.append(pId);
    //         jqBody.append(pUserId);
    //         jqBody.append(pTitle);
    //         jqBody.append(pBody);
    //         jqBody.append(hr);

           
    //     })
    //     .fail(function(error){
    //         console.error(error);
    //     });
    // });


    //Wariant 2
    $('#get-data').click(function(){
        $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
        .done(function(data){

            let pId = $('<p></p>').text(`Post ID: ${data.id}`);
            let pUserId = $('<p></p>').text(`Post ID: ${data.userID}`);
            let pTitle = $('<p></p>').text(`Post ID: ${data.title}`);
            let pBody = $('<p></p>').text(`Post ID: ${data.body}`);
            let hr = $('<hr />');

            let jqBody = $('body');

            jqBody.append(pId);
            jqBody.append(pUserId);
            jqBody.append(pTitle);
            jqBody.append(pBody);
            jqBody.append(hr);

           
        })
        .fail(function(error){
            console.error(error);
        });
    });


});

