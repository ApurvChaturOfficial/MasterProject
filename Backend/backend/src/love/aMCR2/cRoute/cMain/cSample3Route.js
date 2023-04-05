const express = require('express');
const authenticateUser = require('../../../cFunction/dAuthenticateUser');
const { sample3Controller } = require('../../bController/cMain/cSample3Controller');

const router = express.Router();


router.route("/list").get(sample3Controller().list);
router.route("/create").post(authenticateUser, sample3Controller().create);
router.route("/retrieve/:id").get(authenticateUser, sample3Controller().retrieve);
router.route("/update/:id").put(authenticateUser, sample3Controller().update);
router.route("/delete/:id").delete(authenticateUser, sample3Controller().delete);


module.exports = router
