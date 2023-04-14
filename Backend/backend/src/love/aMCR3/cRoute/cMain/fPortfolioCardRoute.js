const express = require('express');
const authenticateUser = require('../../../cFunction/dAuthenticateUser');
const UserModel = require('../../aModel/bAdministration/aUserModel');
const { portfolioCardController } = require('../../bController/cMain/fPortfolioCardController');

const router = express.Router();


router.route("/list").get(portfolioCardController().list);
router.route("/create").post(authenticateUser(UserModel), portfolioCardController().create);
router.route("/retrieve/:id").get(authenticateUser(UserModel), portfolioCardController().retrieve);
router.route("/update/:id").put(authenticateUser(UserModel), portfolioCardController().update);
router.route("/delete/:id").delete(authenticateUser(UserModel), portfolioCardController().delete);


module.exports = router
