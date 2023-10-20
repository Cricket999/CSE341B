const router = require("express").Router();
const controller = require("../controllers/users");
const validate = require("../validation/validation");

router.get("/", controller.getAll);

router.post("/", validate.userValidationRules(), validate.userValidate, controller.addUser);

router.put("/:id", validate.checkIdRules(), validate.checkIdValidate, validate.userValidationRules(), validate.userValidate, controller.editUser);

router.delete("/:id", validate.checkIdRules(), validate.checkIdValidate, controller.deleteUser);

module.exports = router;