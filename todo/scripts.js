let newRow1 = `<li class="row"><input type="text" value="`;
let newRow2 = `"><button class="del" ><i class="fa fa-trash"></i></button><button class="tick"><i class="fa fa-check"></i></button></li>`;

$(document).ready(function () {

  $('.todos-container').on('click', '.tick', (event) => {
    //$(event.target).parent().parent().find("input").css("text-decoration"," line-through");
    $(event.target).parent().parent().find("input").toggleClass("ln-through");
  });

  $('.todos-container').on('click', '.del', (event) => {
    //delete containing "li"  element
    $(event.target).parent().parent().remove();
  });



  $("#atdb").on('click', function () {
    //$('ul').append(`<li>${$("#atdf").val()}</li>`);
    $('ul').append(newRow1 + $("#atdf").val() + newRow2);
    $("#atdf").val(""); //empty
  });

});

