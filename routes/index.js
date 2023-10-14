const router = require("express").Router();

router.use("/users", require("./users"));
router.use("/swagger", require("./swagger"));

module.exports = router;