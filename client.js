

$(document).ready(onReady); 

function onReady() {
    console.log('ayy');
    $('h1').css('color', 'red');
    $('h1').addClass('funny');
    console.log($('h2').text());

    $('#nameInput').val('Ellen');
    console.log($('#nameInput').val());
    //here, .val() is both a getter and a setter

    //eventssssss
    //the function down there is an anonymous callback function
    $('#clickableButton').on('click', function() {
        console.log($('#nameInput').val());
    })
    $('#iWasClicked').on('click', function() {
        console.log('I was clicked');
    })
}
//jQuery is the same as $, it's a function because it's followed by parenthesis
//you could write jQuery(document.ready( console.log('ayy')));

console.log("JQuery Lecture"); //this line will be console.logged first
//callbacks??
// $(document) is a function that returns an object that has the method .ready()
// we pass a function into .ready(), and .ready() waits until it's ready, and when that happens, it runs
//it's a callback function
//baby's first callback function

