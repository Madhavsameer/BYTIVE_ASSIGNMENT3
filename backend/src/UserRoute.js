const express = require('express');
const router = express.Router();
const userController = require("./UserController");

router.get("/", userController.getAllUsers);
router.post("/create", userController.createUser);
router.post("/creates", userController.createMultipleUser);

module.exports = router;
