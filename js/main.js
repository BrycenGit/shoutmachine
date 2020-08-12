$(document).ready(function() {
  $("#shout-form").submit(function(event) {
    event.preventDefault();

    const userInput = $("input#shout").val().toUpperCase();
    alert(userInput);
  });
});