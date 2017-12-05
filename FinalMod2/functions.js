$(document).ready(function(){
    $("#changeColor").click(function(){
        $(".col-md-12 , .col-md-6").css("background-color", "#D5C2D4");
    });
    $("#changeColorTwo").click(function(){
        $(".col-md-12 , .col-md-6").css("background-color", "#9befb2");
    });
     $("#monthToggle").click(function(){
        $("#month").toggle();
    });
    $("#changeFont").click(function(){
        $(".col-md-12 , .col-md-6").css({"font-family": "Brush Script MT, cursive", "font-size": "25px"});
    });
});

  function makeEvent(){
  	var newPara = document.createElement("p");
	newPara.innerHTML = "Party!!!"

	var siblingPara = document.getElementById("event")
	siblingPara.insertBefore(newPara, null);
  }


 function overWrite(){
  		document.write("Have a good day!");
  }