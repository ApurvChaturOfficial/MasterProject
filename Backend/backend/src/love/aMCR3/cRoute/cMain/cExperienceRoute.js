const express = require('express');
const authenticateUser = require('../../../cFunction/dAuthenticateUser');
const UserModel = require('../../aModel/bAdministration/aUserModel');
const { experienceController } = require('../../bController/cMain/cExperienceController');

const router = express.Router();


router.route("/list").get(experienceController().list);
router.route("/create").post(authenticateUser(UserModel), experienceController().create);
router.route("/retrieve/:id").get(authenticateUser(UserModel), experienceController().retrieve);
router.route("/update/:id").put(authenticateUser(UserModel), experienceController().update);
router.route("/delete/:id").delete(authenticateUser(UserModel), experienceController().delete);


module.exports = router
