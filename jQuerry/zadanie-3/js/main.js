     $('#count-sum').on('click', function(){
        let suma = 0
        $('[id^="person"]').each(function(index, element){
            let salary = 0
            salary = parseInt($(element).children('.salary').text());
            suma = suma + salary
        })

        $('#sum').text(suma)
       
    })

   