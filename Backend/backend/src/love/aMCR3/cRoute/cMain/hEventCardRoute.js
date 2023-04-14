const express = require('express');
const authenticateUser = require('../../../cFunction/dAuthenticateUser');
const UserModel = require('../../aModel/bAdministration/aUserModel');
const { eventCardController } = require('../../bController/cMain/hEventCardController');

const router = express.Router();


router.route("/list").get(eventCardController().list);
router.route("/create").post(authenticateUser(UserModel), eventCardController().create);
router.route("/retrieve/:id").get(authenticateUser(UserModel), eventCardController().retrieve);
router.route("/update/:id").put(authenticateUser(UserModel), eventCardController().update);
router.route("/delete/:id").delete(authenticateUser(UserModel), eventCardController().delete);


module.exports = router
