$(document).ready(function () {
    var questions;
    var question;
    var correctTally = 0;
    var questionNumber = 1;
    var totalQuestions;

    
    $("#nextQuestionButton").hide();
    $("#result").hide();
    $("#endQuiz").hide();
    $("#score").hide();

    $.getJSON("js/questions.json", function (data) {

        questions = data;
        totalQuestions = questions.questions.length;
        getQuestion();
        $("#questionNumber").html("<p>Question " + questionNumber + "/" + totalQuestions + "<p>")

    }).fail(function () {
        console.log("error getting questions");
    });

    $("#answerButton1").on("click", function () {

        optionClicked(0)
        $("#answerButton1").css({"background-color": "#333"})
    });

    $("#answerButton2").on("click", function () {

        optionClicked(1)
        $("#answerButton2").css({"background-color": "#333"})
    });

    $("#answerButton3").on("click", function () {
        optionClicked(2)
        $("#answerButton3").css({"background-color": "#333"})
    });


    function optionClicked(option) {

        $("#nextQuestionButton").show();
        $("#answerButton1").prop("disabled", true);
        $("#answerButton2").prop("disabled", true);
        $("#answerButton3").prop("disabled", true);

        if (question.answers[option].correct === true) {
            $("#resultPlaceholder").html("<h2>Correct!</h2>");
         $("#incorrectSentencePlaceholder").hide();
            correctTally = correctTally + 1;
        } else {
            $("#resultPlaceholder").html("<h2>Incorrect!</h2>");
            $("#incorrectSentencePlaceholder").show();
            
        }
        $("#result").show();
        $("#resultPlaceholder").show();
    }


    function getQuestion() {
        if (questions.questions.length > 0) {
            let x = Math.floor(Math.random() * questions.questions.length);
            question = questions.questions[x];
            questions.questions.splice(x, 1);
            $("#questionPlaceholder").html("<p>" + (question.text) + "</p>");
            $("#answerButton1").html((question.answers[0].text));
            $("#answerButton2").html((question.answers[1].text));
            $("#answerButton3").html((question.answers[2].text));
            $("#answerButton1").prop("disabled", false);
            $("#answerButton2").prop("disabled", false);
            $("#answerButton3").prop("disabled", false);
            $("#incorrectSentencePlaceholder").html("<p>" + (question.incorrectSentence) + "</p>");
        }

    }

    $("#nextQuestionButton").on("click", function () {

        questionNumber = questionNumber + 1;


        $("#nextQuestionButton").hide();
        $("#resultPlaceholder").hide();
        $("#result").hide();
        $("#incorrectSentencePlaceholder").hide();
        $("#answerButton1").css({"background-color": "#604C2A"})
        $("#answerButton2").css({"background-color": "#604C2A"})
        $("#answerButton3").css({"background-color": "#604C2A"})
      
        if (questions.questions.length == 1) {
            $("#endQuiz").show();
            $("#score").show();
            $("#score").html("<p> You scored " + correctTally + "/" + totalQuestions + ", well done!</p>");
            $("#questionPlaceholder").hide();
            $("#answerButton1").hide();
            $("#answerButton2").hide();
            $("#answerButton3").hide();
            $("#questionNumber").hide();
            if(correctTally > 8){
                $("#score").html("<p> You scored " + correctTally + "/" + totalQuestions + ", well done!</p>");
            } else{
                $("#score").html("<p> You scored " + correctTally + "/" + totalQuestions + ", better luck next time!</p>");
            }
        } else {
           
            $("#questionNumber").html("<p>Question " + questionNumber + "/" + totalQuestions + "<p>")
            getQuestion();
        }
    })




})