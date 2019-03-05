
var randomResult;
var win = 0;
var loss = 0;
var previous = 0;

var restartGame = function(){
$(".crystal").empty();

var images = 'https://www.gaia.com/wp-content/uploads/article-migration-image-how-to-work-with-crystals.png',
              'https://www.gaia.com/wp-content/uploads/article-migration-image-how-to-work-with-crystals.png',
              'https://www.gaia.com/wp-content/uploads/article-migration-image-how-to-work-with-crystals.png',
              'https://www.gaia.com/wp-content/uploads/article-migration-image-how-to-work-with-crystals.png';


randomResult = Math.floor(Math.random() * 69) + 30;


$("#result").html('Number to Guess: ' + randomResult);

for(var i = 0; i < 4; i++){
  var random = Math.floor(Math.random() * 11) + 1;
  console.log(random);

  var crystal = $("<div>");
  crystal.attr({
      "class": 'crystal',
      "data-random": random
  });
  crystal.css({
    "background-image":"url'" + (images[i]) + "'"
  });

  $(".crystals").append(crystal);

}
  $("#previous").html("Score: " + previous);

}
restartGame();


$(document).on('click', ".crystal", function () {
  
  var result;

  var num = parseInt($(this).attr('data-random'));

  previous += num;

  $("#previous").html("Score: ", previous);

  console.log(previous);

  if(previous > randomResult){
    loss++;
    restartGame();
    $("#losses").html("Losses: " + loss);

    previous = 0;

  }
  else if(previous === randomResult){
    win++;

    $("#wins").html(" Wins: " + win);
    restartGame();
    previous = 0;

  }
});