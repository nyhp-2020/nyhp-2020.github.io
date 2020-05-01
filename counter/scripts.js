let counter = 0;
$("#cv").text(counter);
$("#inc").click(() => {
    $("#cv").text(++counter);
});
$("#dec").click(() => {
    $("#cv").text(--counter);
});