
var realdlineSync=require("readline-sync");
var username=realdlineSync.question("what's your game name ? " );
var score=0; 
console.log("welcome "+username+" into game about how well do you know sushil ? ");

var highscore=[
  {
    name:"sushil",
    score:"3"
  },
  
  {
    name:"nilima",
    score:"3"

  }]
function game(que,ans){
  var userans=realdlineSync.question(que);
  if(userans===ans){
    score=score+1;
    console.log("right :-) ");
  }else{
    console.log("wrong :-( ");
  }
  console.log("score is "+ score);
}
var questions=[{
  question:"where do i live ? ",
  answer:"nagpur"
},{
  question:"whats my age ? ",
  answer:"22"
},{
  question:"whats my favorate color ? ",
  answer:"black"
}
]

for(var i=0;i<questions.length;i=i+1){
  var currrentquestion=questions[i];
  game(currrentquestion.question,currrentquestion.answer)
}
console.log("your final score is - "+score)
if (score>=highscore[0].score){
  console.log("you have beaten the score")
}else{
  console.log("highscore is " + highscore[0].score)
}