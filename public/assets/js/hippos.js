// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devoured").on("click", function(event) {
        event.preventDefault();
      var id = $(this).data("id");
      var newFood = true;
  
      var newHungerState = {
        devoured: newFood
      };
      console.log(newFood);
  
      // Send the PUT request.
      $.ajax("/api/hippos/" + id, {
        type: "PUT",
        data: newHungerState
      }).then(
        function() {
          console.log("changed sleep to", newFood);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newFoodItem = {
        food_name: $("#ca").val().trim(),
        devoured: false
      };
  
      // Send the POST request.
      $.ajax("/api/hippos", {
        type: "POST",
        data: newFoodItem
      }).then(
        function() {
          console.log("created new hippo food");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });  

  });
  