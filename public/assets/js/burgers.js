// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newDevoure = $(this).data("newDevoure");

    var newDevoureState = {
      devoured: newDevoure
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevoureState
    }).then(
      function() {
        console.log("changed hungry state to", newDevoure);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  // $(".delete-cat").on("click", function(event) {
  //   var id = $(this).data("id");

  //   // Send the PUT request.
  //   $.ajax("/api/cats/" + id, {
  //     type: "DELETE"
  //   }).then(
  //     function() {
  //       console.log("cat was deleted");
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#ca").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
