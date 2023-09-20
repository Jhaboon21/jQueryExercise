//When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”
$(document).ready(function() {
    console.log("Let’s get ready to party with jQuery!");
});
  
//Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).
$('article img').addClass('image-center');

//Remove the last paragraph in the article.
$('article p').eq(length-1).remove();

//Set the font size of the title to be a random pixel size from 0 to 100.
let random100 = Math.floor(Math.random()*100);
$('#title').css("font-size", random100);

//Add an item to the list; it can say whatever you want.
$('aside ol').append('<li>Here is a new li!!!</li>');

//Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.
$('aside').empty().append('<p>Here is a paragraph apologizing for the list’s existence.</p>')

//When you change the numbers in the three inputs on the bottom, the background 
//  color of the body should change to match whatever the three values in the inputs are.
$(".form-control").on('keyup blur change', function () {
    let red = $(".form-control").eq(0).val();
    let blue = $(".form-control").eq(1).val();
    let green = $(".form-control").eq(2).val();
    $("body").css("background-color",
        "rgb(" + red + "," + green + "," + blue + ")");
})

//Add an event listener so that when you click on the image, it is removed from the DOM.
$('img').on("click", function() {
    $(this).remove();
})
let $input = $('<input type="button" value="Remove" />').on("click", function(e) {
    e.target.parentElement.remove();
});
$('form').on("submit", function(e) {
    e.preventDefault();
    if($('form input').eq(0).val() == ''){
        console.log("please enter title!")
    } else if($('form input').eq(1).val() == '')
    {
        console.log("please enter rating")
    }
    else {
        $('form').append(`<ul>${$('form input').eq(0).val()} ${$('form input').eq(1).val()}</ul?`);
        $('form ul').append($input);
        $('form input').eq(0).val("");
        $('form input').eq(1).val("");
    }
})