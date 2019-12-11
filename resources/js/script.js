$(document).ready(function() {
    var answerContainer = $(".answer-container");
    var slideContainer = $(".slide-container");
    var quizContainer = $(".quiz-container");
    var scoreContainer = $(".score-container");
    var score = 0;
    var currentSlide = 1;

    function correctAnswer() {
        answerContainer.text("Correct!");
        score = score + 10;
    }
    function incorrectAnswer() {
        answerContainer.text("Wrong!");
        score = score - 10;
    }
    
    function showFinalScore() {
        console.log("hooray");
        quizContainer.hide();
        scoreContainer.show();
    }
      
    function showSlides(index) {
        var i;
        var slides = $(".slide");
        //loop slides for now
        if (index > slides.length) {
            showFinalScore();
            return
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[currentSlide-1].style.display = "block";
    }

    function showNextSlide(n) {
        showSlides(currentSlide = currentSlide + n);
        answerContainer.text("");
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
                    setTimeout(() => showNextSlide(1), 1000);
                });

            });
        });
    };

    $("#start-button").on("click", function() {
        $("#landing").hide();
        buildQuiz();
        showSlides(currentSlide);
    });

    $(".submit-scores-button").on("click", function() {
        console.log("submit");
        window.location.href="high-scores.html";
    });

});