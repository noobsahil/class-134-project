$(document).ready(function(){

    console.log('Ready')

    var currentDate = new Date()
    $("#date").text(currentDate.toDateString())
    $('#button').click(function(){

        let text_value = $('#text').val()
        let input_text = {'review' : text_value}
        console.log(input_text)

        $.ajax({
            type : '',
            data : JSON.stringify(),
            dataType : 'json',
            contentType : 'application/json',

            success : function(result){

                let sentiment = result.sentiment()
                let image_path = result.image_path()

                $("#prediction").text(sentiment)
                $("#emotion").attr("src",image_path)


                $("#result-container").show()
            },


            error : function(result){

                console.log(result)
            }
        })
        $('#text').val("")
    })
        
})