var router = require("express").Router();

router.get("/", function (request, response) {
    response.send("Bye!");
});

module.exports = router;