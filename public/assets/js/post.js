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

    // $.post("/api/authors", authorData).then(getAuthors);

})

$(".eat").on("click", function(event) {
    event.preventDefault();
    $(this).toggleClass("hide");
    $(this).next().toggleClass("hide");
    $(this).next().next().toggleClass("hide");

})

$(".devour").on("click", function() {
    var id = $(this).data("id");
    var eater = $(this).prev().find("#name").val().trim();

    // grab customer's name
    var newCustomer = {
        name: eater,
        BurgerId: id
    };

    // add customer to customers table
    $.post("/api/customers", newCustomer, function(data) {
        console.log("new customer made");
        console.log(data);
    })

    // update db devoured value
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
    }).then(function() {
        console.log("id: " + id + " devoured.");
        location.reload();
    });


})