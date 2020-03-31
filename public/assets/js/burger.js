$(function(){
    $("#addburger").on("click", function(event){
        event.preventDefault();
        console.log("submit clicked");
        var newBurger ={
            burger_name: $("#newburger").val().trim()
        };
    
        $.ajax("/api/brgrs",{
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log("add new burger");
            location.reload();
        });
    });

    $(".eatit").on("click", function(){
        event.preventDefault();
        var id =$(this).data("id");

        $.ajax("/api/brgrs/"+ id,{
            type:"PUT",
            data:{devoured:1}
        }).then(function(){
            console.log("Burger downed!");
            location.reload();
        });
    });

});