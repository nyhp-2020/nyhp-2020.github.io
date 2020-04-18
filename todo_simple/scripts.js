//$(document).ready(function () {
 
// Add handler to parent element (of dynamically added list elements)
  $('ul').on('click', 'li', function () {
    //$(this).fadeOut(500);
    $(this).toggleClass("ln-through");
  });


  $("#atdb").on('click', function () {
    $('ul').append(`<li>${$("#atdf").val()}</li>`);
    $("#atdf").val(""); //empty
  });

//});


/* $("#atdb").click(() => {
  $('ul').append(`<li>${$("#atdf").val()}</li>`);
  $("#atdf").val("");
});
 */

