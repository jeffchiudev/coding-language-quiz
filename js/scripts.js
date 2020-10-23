$(document).ready(function() {
  $("#name-form").submit(function(event) {
    $(".greeting").fadeOut();
    const person = $("input#quiz-taker").val();
    
    $(".person").append(person);
    event.preventDefault();
    $(".explanation").fadeIn();
  });
  $("#start").click(function(event) { 
    $(".explanation").fadeOut();
    $(".the-quiz").fadeIn();
    event.preventDefault;
  });
  $("#quiz-form").submit(function(event) {
    const musicValue = parseInt($("input:radio[name=music]:checked").val());
    const foodValue = parseInt($("input:radio[name=food-host]:checked").val());
    const animalValue = parseInt($("input:radio[name=animal]:checked").val());
    const placeValue = parseInt($("input:radio[name=place]:checked").val());
    const colorValue = parseInt($("input:radio[name=color]:checked").val());
    let total = colorValue + placeValue + animalValue + foodValue + musicValue;

    if (total <= 6) {
      $(".final-result").append("Python");
      $(".pythonFinal").fadeIn();
    } else if (total >= 7 && total <= 11) {
      $(".final-result").append("Java");
      $(".javaFinal").fadeIn();
    } else {
      $(".final-result").append("JavaScript");
      $(".javaScriptFinal").fadeIn();
    }

    $(".results").fadeIn();
    $(".the-quiz").fadeOut();
    event.preventDefault();
  });
});