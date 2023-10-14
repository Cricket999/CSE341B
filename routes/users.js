const router = require("express").Router();
const controller = require("../controllers/users");

router.get("/", controller.getAll);

router.post("/", controller.addUser);

module.exports = router;