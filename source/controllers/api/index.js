var router = require("express").Router();

router.use("/greet", require("./greeter"));

module.exports = router;