$("#add-burger").on("click", function(event) {
    event.preventDefault();

    // grab new burger
    var newBurger = {
        burger_name: $("#burger-name").val().trim()
    }

    // post request
    $.post("/api/burgers", newBurger, function(data) {
        // reload page
        location.reload();
    })

})

$(".devour").on("click", function() {
    var id = $(this).data("id");

    // update db devoured value
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
    }).then(function() {
        console.log("id: " + id + " devoured.");
        location.reload();
    });
})