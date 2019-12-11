$(document).ready(function() {
    var answerContainer = $(".answer-container");
    var slideContainer = $(".slide-container");
    var score = 0;
    var currentSlide = 0;

    function correctAnswer() {
        answerContainer.text("Correct!");
        score = score + 10;
    }
    function incorrectAnswer() {
        answerContainer.text("Wrong!");
        score = score - 10;
    }

    function buildQuiz(){
        questions.forEach(function(currentQuestion) {
            var questionText = $("<p>").text(currentQuestion.title);
            var slide = $("<div>");
            slide.addClass("slide");
            slide.append(questionText);

            currentQuestion.choices.forEach(function(choice) {
                var choiceButton = $("<button>");
                choiceButton.text(choice);
                slide.append(choiceButton);
                slideContainer.append(slide);

                choiceButton.on("click", function() {
                    if (choice === currentQuestion.answer) {
                        correctAnswer()
                    } else {
                        incorrectAnswer()
                    }
                });

            });
        });
    };

    $("#start-button").on("click", function() {
        $("#landing").hide();
        buildQuiz();
    });

});