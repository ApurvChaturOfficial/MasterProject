const express = require('express');
const authenticateUser = require('../../../cFunction/dAuthenticateUser');
const UserModel = require('../../aModel/bAdministration/aUserModel');
const { homeController } = require('../../bController/cMain/aHomeController');

const router = express.Router();


router.route("/list").get(homeController().list);
router.route("/create").post(authenticateUser(UserModel), homeController().create);
router.route("/retrieve/:id").get(authenticateUser(UserModel), homeController().retrieve);
router.route("/update/:id").put(authenticateUser(UserModel), homeController().update);
router.route("/delete/:id").delete(authenticateUser(UserModel), homeController().delete);


module.exports = router
