$(document).ready(function() {
  $("#name-form").submit(function(event) {
    const person = $("input#quiz-taker").val();
    
    $(".person").append(person);
    event.preventDefault();
    $(".explanation").show();
    $(".greeting").hide();
  });
  $("#start").click(function(event) { 
    $(".explanation").hide();
    $(".the-quiz").show();
    event.preventDefault;
  });
  $("#quiz-form").submit(function(event) {
    const python = "Python";
    const java = "Java";
    const javascript = "Javascript";
    
    const musicValue = parseInt($("input:radio[name=music]:checked").val());
    const foodValue = parseInt($("input:radio[name=food-host]:checked").val());
    const animalValue = parseInt($("input:radio[name=animal]:checked").val());
    const placeValue = parseInt($("input:radio[name=place]:checked").val());
    const colorValue = parseInt($("input:radio[name=color]:checked").val());
    let total = colorValue + placeValue + animalValue + foodValue + musicValue;

    if (total <= 6) {
      $(".final-result").append(python);
      $(".pythonFinal").show();
    } else if (total >= 7 && total <= 11) {
      $(".final-result").append(java);
      $(".javaFinal").show();
    } else {
      $(".final-result").append(javascript);
      $(".javaScriptFinal").show();
    }

    $(".results").show();
    $(".the-quiz").hide();
    event.preventDefault();
  });
});