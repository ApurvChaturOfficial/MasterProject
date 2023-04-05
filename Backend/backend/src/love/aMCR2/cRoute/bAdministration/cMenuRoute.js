const express = require('express');
const authenticateUser = require('../../../cFunction/dAuthenticateUser');
const { menuController } = require('../../bController/bAdministration/cMenuController');

const router = express.Router();


router.route("/list").get(authenticateUser, menuController().list);
router.route("/create").post(authenticateUser, menuController().create);
router.route("/retrieve/:id").get(authenticateUser, menuController().retrieve);
router.route("/update/:id").put(authenticateUser, menuController().update);
router.route("/delete/:id").delete(authenticateUser, menuController().delete);


module.exports = router
