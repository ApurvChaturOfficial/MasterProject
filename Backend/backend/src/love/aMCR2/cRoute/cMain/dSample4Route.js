const express = require('express');
const authenticateUser = require('../../../cFunction/dAuthenticateUser');
const UserModel = require('../../aModel/bAdministration/aUserModel');
const { sample4Controller } = require('../../bController/cMain/dSample4Controller');

const router = express.Router();


router.route("/list").get(sample4Controller().list);
router.route("/create").post(authenticateUser(UserModel), sample4Controller().create);
router.route("/retrieve/:id").get(authenticateUser(UserModel), sample4Controller().retrieve);
router.route("/update/:id").put(authenticateUser(UserModel), sample4Controller().update);
router.route("/delete/:id").delete(authenticateUser(UserModel), sample4Controller().delete);


module.exports = router
