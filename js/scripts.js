var dinoArray = ["DinoSprites_doux.gif", "DinoSprites_mort.gif", "DinoSprites_tard.gif", "DinoSprites_vita.gif"];

function randomDino () {
  var randomNum = Math.floor(Math.random() * 4);
  document.getElementById("dinoDisplay").src = "img/" + dinoArray[randomNum];
}

function resetGame() {
  $(".titlePage").show();
  $(".dinogatchi").hide();
  $("#youLose").hide();
  randomDino();
  healthBar = 101;

  console.log(healthBar);
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
    console.log(healthBar);

    var dinoName = ($("#nameMyDino").val());
    if (dinoName == ""){
      alert("Please name your dino!");
    }

    else {
      $(".titlePage").hide();
      $(".dinogatchi").show();
      $(".dinoName").text(dinoName);

      var isAlive = true;

      var running = setInterval(function() {
        if (isAlive) {
          $(".progress-bar").text(healthBar-=1);
          $(".progress-bar").css("width", healthBar + "%");
          if (healthBar < 0){
            isAlive = false;
          }
        }
          else {
            alert("You have killed " + dinoName);
            $("#youLose").show();
            $("#youLoseP").text("Your dinosaur has shuffled off this mortal coil.");
            clearInterval(running);
          }
      }, 1000);
      $("#resetGame").click(function(){
        resetGame();
      })
    }

  })
});
