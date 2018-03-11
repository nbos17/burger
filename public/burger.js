// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $("#change-eaten").on("click", function(event) {
    var id = $(this).data("id");

    var newBurger = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newBurger
    }).then(
      function() {
        console.log("changed status to", newBurger);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var burgerMe = {
      name: $("#bu").val().trim(),
      devoured : false
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: burgerMe
    }).then(
      function() {
        console.log("new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});
