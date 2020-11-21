var readlineSync = require("readline-sync");




var userName = readlineSync.question("What's your name? ");

console.log("Welcome "+ userName + " to DO YOU KNOW PRAJWAL?");



var highScoresList=[
  {
    name:"Prajwal",
    score:1
  },
  {
    name:"tanmay",
    score:2
  },
]

var score = 0;
function playgame(ques, answer) {
  var userAnswer = readlineSync.question(ques);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 
    console.log("correct");
    score++;
  } else {
    console.log("wrong!")
  }
  console.log("current score: ", score);
  console.log("-------------")
}


var questionsList = [{
  question:"My favourite game? ",
  answer:"Cricket"
}, {
  question: "My hobby ",
  answer:"Reading"
},
{
  question:"My native place? ",
  answer:"Patliputra"
}];

for (var i=0; i<questionsList.length; i++) {
  var currentQuestion = questionsList[i];
  playgame(currentQuestion.question, currentQuestion.answer)
}

console.log("YAY! You SCORED: ", score);

console.log("Check out the scores")
var item=""
for(var i=0;i<highScoresList.length;i++)
{
  // console.log('here')
  item = highScoresList[i]
  console.log("Name: " + item.name + "\t" + "Score: " + item.score)
}

for(var i=0;i<highScoresList.length;i++)
{
  max = item.score
  item = highScoresList[i]
  if(item.score > max)
  {
    max = item.score
    
  }
}
if(score > max) {
  console.log("Congratulations!! " + userName + "It seems You are close to PRAJWAL!")
}