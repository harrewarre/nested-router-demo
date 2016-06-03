var router = require("express").Router();
var hello = require("../../back-end/queries/hello");

router.get("/", function (request, response) {
    response.send("Hello!");
});

router.get("/:name", function (request, response) {
    response.send(hello.formatGreeting(request.params.name));
});

module.exports = router;