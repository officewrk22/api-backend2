const path = require("path");

const express = require("express");

const adminController = require('../controllers/auth');

const router = express.Router();

router.post("/auth/login", adminController.postLogin);
router.post("/auth/hashlink", adminController.postHashEmail);
router.post("/auth/hashlink-two", adminController.postHashEmailTwo);

module.exports = router;
