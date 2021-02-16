const { updateCategoriesById, createCategories, loadAllCategories, deleteCategoryById} = require('../service/category.service');

exports.loadAllCategories = async (req, res) =>{
    const response = {data: null, message: null, statusCode: 200}
    try{
        response.data = await loadAllCategories();
    }catch (e) {
        response.statusCode = 400;
        response.message = e.message;
    }
    return res.status(response.statusCode).json(response);

}

exports.createCategories = async (req, res) =>{
    const response = {data: null, message: null, statusCode: 200}
    try{
        response.data = await createCategories(req.loggedInUserInfo.id, req.body);
    }catch (e) {
        response.statusCode = 400;
        response.message = e.message;
    }
    return res.status(response.statusCode).json(response);
}

exports.updateCategoriesById = async (req, res) =>{
    const response = {data: null, message: null, statusCode: 200}
    try{
        const { categoryId } = req.params
        response.data = await updateCategoriesById(categoryId, req.body);
    }catch (e) {
        response.statusCode = 400;
        response.message = e.message;
    }
    return res.status(response.statusCode).json(response);
}

exports.deleteCategoryById = async (req, res) =>{
    const response = {data: null, message: null, statusCode: 200}
    try{
        const { categoryId } = req.params
        response.data = await deleteCategoryById(categoryId);
    }catch (e) {
        response.statusCode = 400;
        response.message = e.message;
    }
    return res.status(response.statusCode).json(response);
}


