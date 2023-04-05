const express = require('express');
const authenticateUser = require('../../../cFunction/dAuthenticateUser');
const { baseController } = require('../../bController/aSetting/aBaseController');

const router = express.Router();


router.route("/list").get(baseController().list);
router.route("/create").post(authenticateUser, baseController().create);
router.route("/retrieve/:id").get(authenticateUser, baseController().retrieve);
router.route("/update/:id").put(authenticateUser, baseController().update);
router.route("/delete/:id").delete(authenticateUser, baseController().delete);


module.exports = router
