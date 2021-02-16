'use strict'
const router = require('express').Router()
const categoryController = require('../controller/category.controller');
const userMiddleWare = require('../../../middleware/user.role');

router.get('/', userMiddleWare.userLoginTokenVerified, categoryController.loadAllCategories)
router.post('/', userMiddleWare.userLoginTokenVerified, categoryController.createCategories)
router.put('/:categoryId', userMiddleWare.userLoginTokenVerified, categoryController.updateCategoriesById)
router.delete('/:categoryId', userMiddleWare.userLoginTokenVerified, categoryController.deleteCategoryById)

module.exports = router;