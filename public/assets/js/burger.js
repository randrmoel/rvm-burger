// Encapsulating function for ajax calls from sheet
$(function(){
    //Add Burger button listener
    $("#addburger").on("click", function(event){
        event.preventDefault();
        console.log("submit clicked");
        var newBurger ={
            burger_name: $("#newburger").val().trim()
        };
        //Must enter a burger, no blanks allowed
        if(newBurger.burger_name.length>0){
        $.ajax("/api/brgrs",{
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log("add new burger");
            location.reload();
        });
    } else {
        alert("Must enter burger name");
    }
    });
    //call for devouring burger and changing to devoured side
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
