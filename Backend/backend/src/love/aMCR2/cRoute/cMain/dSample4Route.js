const express = require('express');
const authenticateUser = require('../../../cFunction/dAuthenticateUser');
const { sample4Controller } = require('../../bController/cMain/dSample4Controller');

const router = express.Router();


router.route("/list").get(sample4Controller().list);
router.route("/create").post(authenticateUser, sample4Controller().create);
router.route("/retrieve/:id").get(authenticateUser, sample4Controller().retrieve);
router.route("/update/:id").put(authenticateUser, sample4Controller().update);
router.route("/delete/:id").delete(authenticateUser, sample4Controller().delete);


module.exports = router
