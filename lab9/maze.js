"use strict";
$(document).ready(function () {
    var start = false;
    $(".boundary").mouseover(function (){
        if(start){
            $(".boundary").addClass("youlose");
            $("#status").text("Game over")
            //alert("Sorry, you lost");
            start = false;
        }
    });
    $("#start").click(function (){
        start = true;
        $(".boundary").removeClass("youlose");
        $("#status").text("Game started");
    });
    $("#end").mouseover(function (){
        if (start){
            $("#status").text("You win!");
            //alert("You win!");
            start = false;
        }
    });
    $("#maze").mouseleave(function (){
        if(start){
            $(".boundary").addClass("youlose");
            $("#status").text("Game Over");
            start = false;
        }
    });

});
