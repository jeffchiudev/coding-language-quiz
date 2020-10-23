$(document).ready(function() {
  $("#name-form").submit(function(event) {
    const person = $("input#quiz-taker").val();
    event.preventDefault();
  });
  $("#quiz-form").submit(function(event) {
    let total = 0;
    const musicValue = parseInt($("input:radio[name=music]:checked").val());
    const foodValue = parseInt($("input:radio[name=food-host]:checked").val());
    const animalValue = parseInt($("intput:radio[name=animal]:checked").val());
    const placeValue = parseInt($("input:radio[name=place]:checked").val());
    const colorValue = parseInt($("input:radio[name=color]:checked").val());
    console.log(total + colorValue);
    event.preventDefault();
  });
});