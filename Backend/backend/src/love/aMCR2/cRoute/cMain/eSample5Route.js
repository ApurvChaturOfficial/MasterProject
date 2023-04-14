const express = require('express');
const authenticateUser = require('../../../cFunction/dAuthenticateUser');
const UserModel = require('../../aModel/bAdministration/aUserModel');
const { sample5Controller } = require('../../bController/cMain/eSample5Controller');

const router = express.Router();


router.route("/list").get(sample5Controller().list);
router.route("/create").post(authenticateUser(UserModel), sample5Controller().create);
router.route("/retrieve/:id").get(authenticateUser(UserModel), sample5Controller().retrieve);
router.route("/update/:id").put(authenticateUser(UserModel), sample5Controller().update);
router.route("/delete/:id").delete(authenticateUser(UserModel), sample5Controller().delete);


module.exports = router
