"use strict";
function Greeting(options) {
    $('#name').html("Hello " + options.name + "!");
    $('#name').click(function () {
        alert(options.name);
    });
    console.log("Hello " + options.name + "!");
}
Greeting({
    name: "James"
});
