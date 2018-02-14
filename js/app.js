$( document ).ready(function() {
    
    $("#messageEntered").keyup(function() {
        
        $(messagePrevisual).text($("#messageEntered").val());
    
    });

});
    
