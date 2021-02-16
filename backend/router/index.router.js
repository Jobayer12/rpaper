'use strict'
const router = require('express').Router()
const userRouter = require('../pages/user/router/user.router');
const contactRouter = require('../pages/contact/router/contact.router');
const categoryRouter = require('../pages/category/router/category.router');

router.use('/users',userRouter);
router.use('/contact-us',contactRouter);
router.use('/category', categoryRouter);

module.exports = router;