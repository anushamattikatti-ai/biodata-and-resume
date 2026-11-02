
$(document).ready(function() {

    // Welcome animation
    $(".hero-content").hide().fadeIn(1500);

    // Navigation hover effect
    $("nav a").hover(
        function() {
            $(this).css("color", "#c17ca6");
        },
        function() {
            $(this).css("color", "#59465c");
        }
    );

    // Flower image effect
    $(".flower img, .biodata-photo img").hover(
        function() {
            $(this).css("transform", "scale(1.05)");
        },
        function() {
            $(this).css("transform", "scale(1)");
        }
    );

});
