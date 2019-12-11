$(document).ready(function() {
    var quizContainer = $(".question-slide");
    var resultsContainer = $(".answer");
    var slide = $(".slide");

    $("#start-button").on("click", function() {
        $("#landing").hide();
        buildQuiz();
    });

    function buildQuiz(){
        questions.forEach(function(currentQuestion) {
            var questionText = $("<p>").text(currentQuestion.title);            
            quizContainer.append(questionText);

            currentQuestion.choices.forEach(function(choice) {
                var choiceButton = $("<button>").text(choice);
                quizContainer.append(choiceButton);
            });
        });

        var submitButton = $("<button>").text("Submit");
        submitButton.addClass("submit");
        slide.append(submitButton);
    };
});