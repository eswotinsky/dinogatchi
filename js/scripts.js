$(function(){
  $("#submitName").click(function(event){
    event.preventDefault();
    $(".titlePage").hide();
    $(".dinogatchi").show();
    $(".dinoName").text($("#nameMyDino").val());
  })
});
