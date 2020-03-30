$(function(){
    $(".create-form").on("submit", function(event){
        event.preventDefault();

        var newBurger ={
            burger_name: $("#newburger").val().trim()
        };
    
        $.ajax("/api/brgrs",{
            type: "POST",
            data:newBurger
        }).then(function(){
            console.log("add new burger");
            location.reload();
        });
    });

    $(".eatit").on("click", function(){
        event.preventDefault();
        var devState = {
            devoured: 1
        };

        $.ajax("/api/brgrs/"+ id,{
            type:"PUT",
            data:devState
        }).then(function(){
            console.log("Burger downed!");
            location.reload();
        });
    });

});