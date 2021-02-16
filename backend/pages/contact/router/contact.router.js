'use strict'
const router = require('express').Router()
const contactController = require('../controller/contact.controller');
const userMiddleWare = require('../../../middleware/user.role');

router.post('/', contactController.createContactUs);
router.get('/', userMiddleWare.userLoginTokenVerified, contactController.loadAllContactUs);

module.exports = router;