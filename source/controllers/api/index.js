var router = require("express").Router();

router.use("/greet", require("./greeter"));
router.use("/leave", require("./leaver"));

module.exports = router;