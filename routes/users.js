const router = require("express").Router();
const controller = require("../controllers/users");
const validate = require("../validation/validation");
const requiresAuth = require('express-openid-connect');

router.get("/", requiresAuth.requiresAuth(), controller.getAll);

router.post("/", requiresAuth.requiresAuth(), validate.userValidationRules(), validate.userValidate, controller.addUser);

router.put("/:id", requiresAuth.requiresAuth(), validate.checkIdRules(), validate.checkIdValidate, validate.userValidationRules(), validate.userValidate, controller.editUser);

router.delete("/:id", requiresAuth.requiresAuth(), validate.checkIdRules(), validate.checkIdValidate, controller.deleteUser);

module.exports = router;