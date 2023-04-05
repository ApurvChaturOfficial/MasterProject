const express = require('express');
const authenticateUser = require('../../../cFunction/dAuthenticateUser');
const { sample5Controller } = require('../../bController/cMain/eSample5Controller');

const router = express.Router();


router.route("/list").get(sample5Controller().list);
router.route("/create").post(authenticateUser, sample5Controller().create);
router.route("/retrieve/:id").get(authenticateUser, sample5Controller().retrieve);
router.route("/update/:id").put(authenticateUser, sample5Controller().update);
router.route("/delete/:id").delete(authenticateUser, sample5Controller().delete);


module.exports = router
