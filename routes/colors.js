const router = require("express").Router();
const controller = require("../controllers/colors");
const validate = require("../validation/validation");

router.get("/", controller.getAll);

router.post("/", validate.colorValidationRules(), validate.colorValidate, controller.addColor);

router.put("/:id", validate.checkIdRules(), validate.checkIdValidate, validate.colorValidationRules(), validate.colorValidate, controller.editColor);

router.delete("/:id", validate.checkIdRules(), validate.checkIdValidate, controller.deleteColor);

module.exports = router;