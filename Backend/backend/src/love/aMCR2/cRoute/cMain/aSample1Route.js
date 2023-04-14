const express = require('express');
const authenticateUser = require('../../../cFunction/dAuthenticateUser');
const UserModel = require('../../aModel/bAdministration/aUserModel');
const { sample1Controller } = require('../../bController/cMain/aSample1Controller');

const router = express.Router();


router.route("/list").get(sample1Controller().list);
router.route("/create").post(authenticateUser(UserModel), sample1Controller().create);
router.route("/retrieve/:id").get(authenticateUser(UserModel), sample1Controller().retrieve);
router.route("/update/:id").put(authenticateUser(UserModel), sample1Controller().update);
router.route("/delete/:id").delete(authenticateUser(UserModel), sample1Controller().delete);


module.exports = router
