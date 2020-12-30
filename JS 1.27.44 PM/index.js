//Get the button
var mybutton = document.getElementById("top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

//Hamburger menu 
$(".menu").click(function() {
    $(".menu").toggleClass("active");
    $(".push").toggleClass("active");
  });

//Background transition
var $target = $('.wrapper');
inView('.section').on('scroll', function(el){
  var color = $(el).attr('data-background-color');
  $target.css('background-color', color);
});

$(".menu").click(function() {
  $(".menu").toggleClass("active");
  $(".push").toggleClass("active");
});