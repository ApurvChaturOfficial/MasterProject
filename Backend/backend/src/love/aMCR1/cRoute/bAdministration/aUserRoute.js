const express = require('express');
const authenticateUser = require('../../../cFunction/dAuthenticateUser');
const { userController } = require('../../bController/bAdministration/aUserController');

const router = express.Router();


router.route("/list").get(userController().list);
router.route("/create").post(authenticateUser, userController().create);
router.route("/retrieve/:id").get(authenticateUser, userController().retrieve);
router.route("/update/:id").put(authenticateUser, userController().update);
router.route("/delete/:id").delete(authenticateUser, userController().delete);

router.route("/register").post(userController().register);
router.route("/login").post(userController().login);
router.route("/logout").get(authenticateUser, userController().logout);
router.route("/forgot-password").post(userController().forgotPassword);
router.route("/reset-password/:token").put(userController().resetPassword);

router.route("/profile-retrieve").get(authenticateUser, userController().profileRetrieve);
router.route("/profile-update").post(authenticateUser, userController().profileUpdate);
router.route("/profile-password-update").post(authenticateUser, userController().profilePasswordUpdate);


module.exports = router
