// 'use strict'
const router = require('express').Router()
const userController = require('../controller/user.controller');
const userMiddleWare = require('../../../middleware/user.role');
const userPermission = require('../../../middleware/user.permission.role');

router.get('/', userMiddleWare.userLoginTokenVerified, userController.getAllUser);
router.post('/register', userController.createLocalUser);
router.put('/confirm-password/:token', userController.changePassword);
router.post('/login', userController.login);
router.put('/update/profile', userMiddleWare.userLoginTokenVerified, userController.updateUserInfo);
router.put('/update/user-authorities',
    userMiddleWare.userLoginTokenVerified,
    userPermission.userPermissionRole(['SUPER_ADMIN']),
    userController.updateAuthority);
router.post('/reset-password', userController.resetPassword);
module.exports = router;
