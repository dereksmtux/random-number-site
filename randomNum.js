//jquery code
$(document).ready(function(){
  var card = $("<div class = 'row'> <div class = 'col-md-12 card'></div></div>");

  $(".Start").click(function(){
    var userMax = parseInt( prompt("What is your max number?", 10));
    var userMin =  parseInt (prompt("What is your min number?", 1));
    var userRuns = parseInt( prompt("How many numbers do you want", 10));
    
    var userNums = run(userMax,userMin, userRuns);
    
    $(".box").append(card);
    for(i = 0; i < userRuns; i ++){
      $(".card").append(userNums[i] + ", ");
    }

  });

  $(".clear").click(function(){
    location.reload(true);
  })

});







// code for number generation

//generates many numbers and places them in an array
function run(max , min, runs){
  var list = [];
  for(i = 0; i< runs; i++){
    list.push(randomNum(max, min));
  }
  return list;
}
//generates one number
function randomNum(max, min){
return Math.floor(  Math.random() * (max - min + 1)) + min;
}

