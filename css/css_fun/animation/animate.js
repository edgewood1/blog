$(".card").on("click", function(event) {
    var targ = event.target.id;
    if (targ=="card2") {
        $("#card2").css("z-index","0")
    } else {
        $("#card2").css("z-index","50")
    }
})
 
$(".color_card").on("click", function(event) {
    var targ = event.target.id;
    if(targ=="card4") {
        $("#card4, #card5, #card6").removeClass("center left right");
        $("#card4").addClass("center");
        $("#card5").addClass("left");
        $("#card6").addClass("right");
    } else if (targ=="card6") {
        $("#card4, #card5, #card6").removeClass("center left right");
        $("#card6").addClass("center");
        $("#card4").addClass("left");
        $("#card5").addClass("right");
    } else if (targ=="card5") {
        $("#card4, #card5, #card6").removeClass("center left right");
        $("#card5").addClass("center");
        $("#card4").addClass("left");
        $("#card6").addClass("right");
    }
})