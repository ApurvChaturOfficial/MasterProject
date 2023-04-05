const express = require('express');
const authenticateUser = require('../../../cFunction/dAuthenticateUser');
const { roleController } = require('../../bController/bAdministration/bRoleController');

const router = express.Router();


router.route("/list").get(roleController().list);
router.route("/create").post(authenticateUser, roleController().create);
router.route("/retrieve/:id").get(authenticateUser, roleController().retrieve);
router.route("/update/:id").put(authenticateUser, roleController().update);
router.route("/delete/:id").delete(authenticateUser, roleController().delete);


module.exports = router
