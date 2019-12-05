// holds the quiz and will also show in the html
var content = $("#content");


// variable - holds questions + answers for the quiz
var questions = [

	{
		question: "How many time zones are in Canada?",
		options: ["4", "6", "3"],
    correctAnswer: "6"
  }, 
	{
		question: "How many states boarder the Pacific Ocean?",
		options: ["5" , "7" , "10"],
		correctAnswer: "7"
	},
	{
		question: "What country has the largest land mass?",
		options: ["China" , "Turkey" , "Russia"],
		correctAnswer: "Russia"
	},
	{
		question: "Which is the most abundant metal in the earth's crust?",
		options: ["Aluminum" , "Silicon" , "Oxygen"],
		correctAnswer: "Aluminum"
	},
	{
		question: "The black forest is located in what European country?",
		options: ["Italy" , "Spain" , "Germany"],
		correctAnswer: "Germany"
	}
];

// variable for the timer
var timer;


// variable that starts the quiz
var game = {
// setting parameters
	correct: 0,
	incorrect: 0,
	counter: 120,
// creating functinality for the timer
  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME'S UP");
      game.done();
    }
  },
  // functionality after start button is pressed
  start: function() {
  	timer = setInterval(game.countdown, 1000);
// adding the html for the timer area
  	$("#wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");
// removes the start button in order to load the time and quiz
  	$("#start").remove();
// loop to go through the question and options for each and append in html
  	for (var i = 0; i < questions.length; i++) {
      content.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].options.length; j++) {
        content.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].options[j] + "''>" + questions[i].options[j]);
      }
    }
 //append the done button to end the quiz
    content.append("<button id='done'>Done</button>");
  },
 // functionality after done button is pressed
  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();
  },
 //runs the result function just called
  result: function() {
 // clears time
  	clearInterval(timer);
//removes the html about the timer
  	$("#wrapper h2").remove();
// shows user the tally for inccorrect/correct
  	content.html("<h2>All Done!</h2>");
    content.append("<h2>Correct Answers: " + this.correct + "</h2>");
    content.append("<h2>Incorrect Answers: " + this.incorrect + "</h2>");
    content.append("<h2>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h2>");
  },


};


// click event for the start button
$(document).on("click", "#start", function() {
  game.start();
});
//click event for the done button - ends game, if time has not already run out
$(document).on("click", "#done", function() {
  game.done();
});

