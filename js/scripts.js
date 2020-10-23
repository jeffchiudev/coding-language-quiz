$(document).ready(function() {
  $("#name-form").submit(function(event) {
    const person = $("input#quiz-taker").val();
    event.preventDefault();
  });
  $("#quiz-form").submit(function(event) {
    const musicValue = parseInt($("input:radio[name=music]:checked").val());
    const foodValue = parseInt($("input:radio[name=food-host]:checked").val());
    const animalValue = parseInt($("input:radio[name=animal]:checked").val());
    const placeValue = parseInt($("input:radio[name=place]:checked").val());
    const colorValue = parseInt($("input:radio[name=color]:checked").val());
    let total = colorValue + placeValue + animalValue + foodValue + musicValue;
    console.log(total);
    event.preventDefault();
  });
});