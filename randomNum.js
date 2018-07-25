//jquery code
$(document).ready(function(){
  var card = $("<div class = 'row'> <div class = 'col-md-12 card'></div></div>");

  $(".Start").click(function(){
    var userMax = prompt("What is your max number?", 10);
    var userRuns = prompt("How many numbers do you want", 10);
    
    var userNums = run(userMax,userRuns);
    console.log(userNums);
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
function run(max , runs){
  var list = [];
  for(i = 0; i< runs; i++){
    list.push(randomNum(max));
  }
  return list;
}
//generates one number
function randomNum(max){
return Math.floor( Math.random() * max + 1);
}

