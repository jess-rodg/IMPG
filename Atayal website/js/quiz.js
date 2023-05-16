$(document).ready(function () {
    var questions;
    var question;
    var correctTally = 0;
    var totalQuestions;

    $("#nextQuestionButton").hide();
    $("#endQuiz").hide();
    $("#score").hide();

    $.getJSON("js/questions.json", function (data) {

        questions = data;
        totalQuestions = questions.questions.length;
        getQuestion();

    }).fail(function () {
        console.log("error getting questions");
    });

    $("#answerButton1").on("click", function () {

        optionClicked(0)
        $("#answerButton1").css({"border-style": "solid", "border-width": "thick"})
    });

    $("#answerButton2").on("click", function () {

        optionClicked(1)
        $("#answerButton2").css({"border-style": "solid", "border-width": "thick"})
    });

    $("#answerButton3").on("click", function () {
        optionClicked(2)
        $("#answerButton3").css({"border-style": "solid", "border-width": "thick"})
    });


    function optionClicked(option) {

        $("#nextQuestionButton").show();
        $("#answerButton1").prop("disabled", true);
        $("#answerButton2").prop("disabled", true);
        $("#answerButton3").prop("disabled", true);

        if (question.answers[option].correct === true) {
            $("#resultPlaceholder").html("<h2>Correct!</h2>");
            $("#resultPlaceholder").css("color", "green")
            correctTally = correctTally + 1;
        } else {
            $("#resultPlaceholder").html("<h2>Incorrect!</h2>");
            $("#resultPlaceholder").css("color", "red")
            $("#incorrectSentencePlaceholder").html("<p>" + JSON.stringify(question.incorrectSentence) + "</p>");
        }
        $(question.answers[option].correct).css("background-color", "green");
        $(question.answers[option].incorrect).css("background-color", "red");
        $("#resultPlaceholder").show();
        $("#incorrectSentencePlaceholder").show();
    }


    function getQuestion() {
        if (questions.questions.length > 0) {
            let x = Math.floor(Math.random() * questions.questions.length);
            question = questions.questions[x];
            questions.questions.splice(x, 1);
            $("#questionPlaceholder").html("<p>" + JSON.stringify(question.text) + "</p>");
            $("#answerButton1").html(JSON.stringify(question.answers[0].text));
            $("#answerButton2").html(JSON.stringify(question.answers[1].text));
            $("#answerButton3").html(JSON.stringify(question.answers[2].text));
            $("#answerButton1").prop("disabled", false);
            $("#answerButton2").prop("disabled", false);
            $("#answerButton3").prop("disabled", false);
        }

    }

    $("#nextQuestionButton").on("click", function () {

        $("#nextQuestionButton").hide();
        $("#resultPlaceholder").hide();
        $("#incorrectSentencePlaceholder").hide();
        $("#answerButton1").css("border-style", "none")
        $("#answerButton2").css("border-style", "none")
        $("#answerButton3").css("border-style", "none")
        if (questions.questions.length > 0) {
            getQuestion();
        } else {
            $("#endQuiz").show();
            $("#score").show();
            $("#score").html("<p> You scored " + correctTally + "/" + totalQuestions + ", well done!</p>");
            $("#questionPlaceholder").hide();
            $("#answerButton1").hide();
            $("#answerButton2").hide();
            $("#answerButton3").hide();
        }
    })




})