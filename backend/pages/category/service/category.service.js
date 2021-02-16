const {createCategories, deleteCategoriesById, loadAllCategories, updateCategoriesById} = require('../database-service/category.database.service');
const { loadUser } = require('../../user/database-service/user.database-service');
const { categoryValidation } = require('../validator');
exports.loadAllCategories = async () =>{
    return await loadAllCategories({'c.deleted_at': null});
}

exports.createCategories = async (id, categoryData) =>{
    await categoryValidation(categoryData);
    const checkCategoryTitle = await loadAllCategories({'c.title': categoryData.title, 'c.deleted_at':null})
    if(checkCategoryTitle
        &&
        checkCategoryTitle[0].title.toLowerCase() === categoryData.title.toLowerCase()
        &&
        checkCategoryTitle.length > 0){
        throw new Error('title already exists');
    }
    const checkUser = await loadUser({'u.deleted_at': null, 'u.id': id});
    if(checkUser && checkUser.length > 0)
    {
      categoryData.user_id = id;
      return await createCategories(categoryData);
    }
    throw new Error('Invalid user id');
}

exports.updateCategoriesById = async (id, updateCategoryData) =>{
    const checkCategory = await loadAllCategories({'c.id': id, 'c.deleted_at':null})
    if(checkCategory && checkCategory.length > 0){
        return await updateCategoriesById(id, updateCategoryData);
    }
    throw new Error('Invalid category id');
}

exports.deleteCategoryById = async id =>{
    const checkCategory = await loadAllCategories({'c.id': id, 'c.deleted_at':null})
    if(checkCategory && checkCategory.length > 0){
        return await deleteCategoriesById(id);
    }
    throw new Error('Invalid category id');
}