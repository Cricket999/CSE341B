const router = require("express").Router();

router.use("/users", require("./users"));
router.use("/swagger", require("./swagger"));
router.use("/colors", require("./colors"))

module.exports = router;