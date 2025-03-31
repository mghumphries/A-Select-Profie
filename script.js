const DisplayQuestions = () => {
    $("#name").text("My name is MaKayla !");
    $("#major").text("I am a CIT major, studying Web Development and Networking.");
    $("#year").text("I am currently in my second year of college and loving it!");
    $('h4').html("<em>I was born and raised in Indiana, United States</em>");
}

$(document).ready(DisplayQuestions);