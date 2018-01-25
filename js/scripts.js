// function healthDecay() {
//   var healthBarLength = 100;
//   while($(".progress-bar").css("width") > "20%") {
//     console.log("hi");
//     $(".progress-bar").css("width") = healthBarLength + "%";
//     healthBarLength -= 10;
//   }
// }



$(function(){
  var healthBar = parseFloat($(".progress-bar").css("width"));



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

  // setInterval(function() {
  //   $("#timer").text(time-=1);
  //   $("#timer").toggleClass("red");
  // }, 1000);

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
      // healthDecay();
      // console.log($(".progress-bar").width);

      
      setInterval(function() {
        $(".progress-bar").text(healthBar-=1);
        $(".progress-bar").css("width", healthBar + "%");
      }, 1000);
    }

  })
});
