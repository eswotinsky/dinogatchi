var dinoArray = ["DinoSprites_doux.gif", "DinoSprites_mort.gif", "DinoSprites_tard.gif", "DinoSprites_vita.gif"];

function randomDino () {
  var randomNum = Math.floor(Math.random() * 4);
  console.log(randomNum);
  console.log(document.getElementById("dinoDisplay").src = "img/" + dinoArray[randomNum]);
}




$(function(){
  var healthBar = parseFloat($(".progress-bar").css("width")) + 1;

  randomDino();

  $("#cookie").click(function(){
    healthBar += 15;
    $(".progress-bar").text(healthBar);
    $(".progress-bar").css("width", healthBar + "%");
  })

  $("#rest").click(function(){
    healthBar += 5;
    $(".progress-bar").text(healthBar);
    $(".progress-bar").css("width", healthBar + "%");
  })

  $("#bandAid").click(function(){
    healthBar += 3;
    $(".progress-bar").text(healthBar);
    $(".progress-bar").css("width", healthBar + "%");
  })

  $("#clean").click(function(){
    healthBar += 2;
    $(".progress-bar").text(healthBar);
    $(".progress-bar").css("width", healthBar + "%");
  })

  $("#submitName").click(function(event){
    event.preventDefault();

    var dinoName = ($("#nameMyDino").val());
    if (dinoName == ""){
      alert("Please name your dino!");
    }

    else {
      $(".titlePage").hide();
      $(".dinogatchi").show();
      $(".dinoName").text(dinoName);

      setInterval(function() {
        $(".progress-bar").text(healthBar-=1);
        $(".progress-bar").css("width", healthBar + "%");
      }, 1000);
    }

  })
});
