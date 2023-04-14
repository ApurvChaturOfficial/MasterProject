const express = require('express');
const authenticateUser = require('../../../cFunction/dAuthenticateUser');
const UserModel = require('../../aModel/bAdministration/aUserModel');
const { sample2Controller } = require('../../bController/cMain/bSample2Controller');

const router = express.Router();


router.route("/list").get(sample2Controller().list);
router.route("/create").post(authenticateUser(UserModel), sample2Controller().create);
router.route("/retrieve/:id").get(authenticateUser(UserModel), sample2Controller().retrieve);
router.route("/update/:id").put(authenticateUser(UserModel), sample2Controller().update);
router.route("/delete/:id").delete(authenticateUser(UserModel), sample2Controller().delete);


module.exports = router
