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
    });

    $("#answerButton2").on("click", function () {

        optionClicked(1)
    });

    $("#answerButton3").on("click", function () {
        optionClicked(2)
    });


    function optionClicked(option) {

        $("#nextQuestionButton").show();
        $("#answerButton1").prop("disabled", true);
        $("#answerButton2").prop("disabled", true);
        $("#answerButton3").prop("disabled", true);

        if (question.answers[option].correct === true) {
            $("#resultPlaceholder").html("<h2>Correct!</h2>");
            correctTally = correctTally + 1;
        } else {
            $("#resultPlaceholder").html("<h2>Incorrect!</h2>");
            $("#incorrectSentencePlaceholder").html("<p>" + JSON.stringify(question.incorrectSentence) + "</p>");
        }
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
        if (questions.questions.length > 0) {
            getQuestion();
        } else {
            $("#endQuiz").show();
            $("#score").show();
            $("#score").html("<p> You scored" + correctTally + "/" + totalQuestions + ", well done!</p>");
            $("#questionPlaceholder").hide();
            $("#answerButton1").hide();
            $("#answerButton2").hide();
            $("#answerButton3").hide();
        }
    })




})