$(document).ready(function() {
    var answerContainer = $(".answer-container");
    var slideContainer = $(".slide-container");
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
      
    function showSlides(index) {
        var i;
        var slides = $(".slide");
        //loop slides for now
        if (index > slides.length) {
            currentSlide = 1
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[currentSlide-1].style.display = "block";
    }

    function showNextSlide(n) {
        showSlides(currentSlide = currentSlide + n);
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
                    showNextSlide(1);

                });

            });
        });
    };

    $("#start-button").on("click", function() {
        $("#landing").hide();
        buildQuiz();
        showSlides(currentSlide);
    });

});