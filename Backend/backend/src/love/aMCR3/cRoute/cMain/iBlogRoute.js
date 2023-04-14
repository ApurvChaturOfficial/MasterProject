const express = require('express');
const authenticateUser = require('../../../cFunction/dAuthenticateUser');
const UserModel = require('../../aModel/bAdministration/aUserModel');
const { blogController } = require('../../bController/cMain/iBlogController');

const router = express.Router();


router.route("/list").get(blogController().list);
router.route("/create").post(authenticateUser(UserModel), blogController().create);
router.route("/retrieve/:id").get(authenticateUser(UserModel), blogController().retrieve);
router.route("/update/:id").put(authenticateUser(UserModel), blogController().update);
router.route("/delete/:id").delete(authenticateUser(UserModel), blogController().delete);


module.exports = router
