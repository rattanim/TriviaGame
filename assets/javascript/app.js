var card = $("#questions-area");

// questions
    var questions = [{
    question: "In the 1985 season, who won the superbowl?",
    answers: ["Patriots", "Dolphins", "Browns", "Bears"],
    RightAnswer: "Bears"
}, {
    question: "Who was the MVP in the 1985 superbowl?",
    answers: ["Irving Fryar", "Cris Collinsworth", "Richard Dent", "Jim McMahon"],
    RightAnswer: "Richard Dent"
}, {
    question: "Who won MVP in 1996?",
    answers: ["Brett Favre", "Barry Sanders", "John Elway", "Jerry Rice", "Deion Sanders"],
    RightAnswer: "Brett Favre"
}, {
    question: "How many punts did Brad Maynard attempt during Super Bowl XXXV to set the record for most in a Super Bowl game?",
    answers: ["9", "10", "11", "12"],
    RightAnswer: "10"
}, {
    question: "In how many Super Bowls have there been a safety?",
    answers: ["0", "1", "3", "5"],
    RightAnswer: "5"
}, {
    question: "Who was the first head coach to appear in three consecutive Super Bowls?",
    answers: ["Vince Lombardi", "Marv Levy", "Bill Parcels", "Don Shula"],
    RightAnswer: "Don Shula"
}, {
    question: "In which superbowl did both teams combine for 12 fumbles?",
    answers: ["Buccaneers vs Raiders (XXXVIII)", "Bills vs Cowboys (XXVII)", "Colts vs Bears (XLI)", "Broncos vs Packers (XXXII)"],
    RightAnswer: "Bills vs Cowboys (XXVII)"
}, {
    question: "Which team was the first non-division winner to play in a Super Bowl?",
    answers: ["Chiefs", "Giants", "Buccaneers", "Ravens"],
    RightAnswer: "Chiefs"
}, {
    question: "Through the first 45 Super Bowls, how many teams have a perfect Super Bowl record?",
    answers: ["5", "4", "1", "8"],
    RightAnswer: "5"
}, {
    question: "Who was the only Cornerback to ever be named a Super Bowl MVP?",
    answers: ["Ronnie Lott", "Champ Bailey", "Larry Brown", "Darrell Green"],
    RightAnswer: "Larry Brown"
}];
// timer variable
var clock;

var Trivia = {

Right: 0,
Wrong: 0,
Counter: 300,

countdown: function() {
    Trivia.Counter--;
    $("#counter-number").html(Trivia.Counter);
    if (Trivia.Counter === 0) {
        console.log("YOU TOOK TOO MUCH TIME");
        Trivia.final();
    }
},
Begin: function() {
    clock = setInterval(Trivia.countdown, 1000);

    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>300</span> Seconds</h2>");

    $("#Begin").remove();

    for (var i = 0; i < questions.length; i++) {
        card.append("<h2>" + questions[i].question + "</h2>");
        for (var j = 0; j < questions[i].answers.length; j++) {
          card.append("<input type='radio' name='question-" + i +
          "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
        }
      }
  
      card.append("<button id='Finished'>Finished</button>");
    },

Finished: function() {

    $.each($("input[name='question-0']:checked"), function() {
        if ($(this).val() === questions[0].RightAnswer) {
          Trivia.Right++;
        }
        else {
          Trivia.Wrong++;
        }
      });
  
      $.each($("input[name='question-1']:checked"), function() {
        if ($(this).val() === questions[1].RightAnswer) {
          Trivia.Right++;
        }
        else {
          Trivia.Wrong++;
        }
      });
  
      $.each($("input[name='question-2']:checked"), function() {
        if ($(this).val() === questions[2].RightAnswer) {
          Trivia.Right++;
        }
        else {
          Trivia.Wrong++;
        }
      });
  
      $.each($("input[name='question-3']:checked"), function() {
        if ($(this).val() === questions[3].RightAnswer) {
          Trivia.Right++;
        }
        else {
          Trivia.Wrong++;
        }
      });
  
      $.each($("input[name='question-4']:checked"), function() {
        if ($(this).val() === questions[4].RightAnswer) {
          Trivia.Right++;
        }
        else {
          Trivia.Wrong++;
        }
      });
  
      $.each($("input[name='question-5']:checked"), function() {
        if ($(this).val() === questions[5].RightAnswer) {
          Trivia.Right++;
        }
        else {
          Trivia.Wrong++;
        }
      });
  
      $.each($("input[name='question-6']:checked"), function() {
        if ($(this).val() === questions[6].RightAnswer) {
          Trivia.Right++;
        }
        else {
          Trivia.Wrong++;
        }
      });
  
      $.each($("input[name='question-7']:checked"), function() {
        if ($(this).val() === questions[7].RightAnswer) {
          Trivia.Right++;
        }
        else {
          Trivia.Wrong++;
        }
      });
  
      $.each($("input[name='question-8']:checked"), function() {
        if ($(this).val() === questions[8].RightAnswer) {
          Trivia.Right++;
        }
        else {
          Trivia.Wrong++;
        }
      });

      $.each($("input[name='question-9']:checked"), function() {
        if ($(this).val() === questions[9].RightAnswer) {
          Trivia.Right++;
        }
        else {
          Trivia.Wrong++;
        }
      });

      this.final();
  
    },

final: function() {

    clearInterval(clock);

    $("#sub-wrapper h2").remove();

    card.html("<h2>WOW YOU FINISHED! LETS SEE HOW YOU DID</h2>");
    card.append("<h3>Right Answers: " + this.Right + "</h3>");
    card.append("<h3>Wrong Answers: " + this.Wrong + "</h3>");
    card.append("<h3>Unanswered: " + (questions.length - (this.Wrong + this.Right)) + "</h3>");
}
};

// on click functions for buttons

$(document).on("click", "#Begin", function() {
  Trivia.Begin();
});

$(document).on("click", "#Finished", function() {
  Trivia.Finished();
});