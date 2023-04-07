const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/userCtrl.js');

router.get('/signUp',userCtrl.signUp);
router.get('/login',userCtrl.login);

module.exports = router;