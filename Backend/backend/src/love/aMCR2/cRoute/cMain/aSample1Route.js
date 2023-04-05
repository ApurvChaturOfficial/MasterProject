const express = require('express');
const authenticateUser = require('../../../cFunction/dAuthenticateUser');
const { sample1Controller } = require('../../bController/cMain/aSample1Controller');

const router = express.Router();


router.route("/list").get(sample1Controller().list);
router.route("/create").post(authenticateUser, sample1Controller().create);
router.route("/retrieve/:id").get(authenticateUser, sample1Controller().retrieve);
router.route("/update/:id").put(authenticateUser, sample1Controller().update);
router.route("/delete/:id").delete(authenticateUser, sample1Controller().delete);


module.exports = router
