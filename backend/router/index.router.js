'use strict'
const router = require('express').Router()
const userRouter = require('../pages/user/router/user.router');

router.use('/users',userRouter);

module.exports = router;