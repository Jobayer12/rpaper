const { updateCategoriesById, createCategories, loadAllCategories, deleteCategoryById} = require('../service/category.service');

exports.loadAllBlogs = async (req, res) =>{
    const response = {data: null, message: null, statusCode: 200}
    try{
        response.data = await loadAllCategories();
    }catch (e) {
        response.statusCode = 400;
        response.message = e.message;
    }
    return res.status(response.statusCode).json(response);

}

exports.createBlogsPost = async (req, res) =>{
    const response = {data: null, message: null, statusCode: 200}
    try{
        response.data = await createCategories(req.loggedInUserInfo.id, req.body);
    }catch (e) {
        response.statusCode = 400;
        response.message = e.message;
    }
    return res.status(response.statusCode).json(response);
}

exports.updateBlogsPostById = async (req, res) =>{
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

exports.deleteBlogPostById = async (req, res) =>{
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


exports.addBlogComment = async (req,res)=>{
    const response = {data: null, message: null, statusCode: 200}
    try{
        const { blogId } = req.params
        response.data = '';
    }catch (e) {
        response.statusCode = 400;
        response.message = e.message;
    }
    return res.status(response.statusCode).json(response);
}


exports.getAllBlogComment = async (req,res)=>{

    const response = {data: null, message: null, statusCode: 200}
    try{
        const { blogId } = req.params
        response.data = null;
    }catch (e) {
        response.statusCode = 400;
        response.message = e.message;
    }
    return res.status(response.statusCode).json(response);

}


exports.removeBlogComment = async (req,res)=>{

    const response = {data: null, message: null, statusCode: 200}
    try{
        const { blogId } = req.params
        response.data = '';
    }catch (e) {
        response.statusCode = 400;
        response.message = e.message;
    }
    return res.status(response.statusCode).json(response);

}


exports.updateBlogComment = async (req,res)=>{
    const response = {data: null, message: null, statusCode: 200}
    try{
        const { blogId } = req.params
        response.data = '';
    }catch (e) {
        response.statusCode = 400;
        response.message = e.message;
    }
    return res.status(response.statusCode).json(response);
}

exports.addBlogLike = async (req,res)=>{
    const response = {data: null, message: null, statusCode: 200}
    try{
        const { blogId } = req.params
        response.data = '';
    }catch (e) {
        response.statusCode = 400;
        response.message = e.message;
    }
    return res.status(response.statusCode).json(response);
}


exports.getAllBlogLike = async (req,res)=>{
    const response = {data: null, message: null, statusCode: 200}
    try{
        const { blogId } = req.params
        response.data = '';
    }catch (e) {
        response.statusCode = 400;
        response.message = e.message;
    }
    return res.status(response.statusCode).json(response);
}


exports.removeBlogLike = async (req,res)=>{
    const response = {data: null, message: null, statusCode: 200}
    try{
        const { blogId } = req.params
        response.data = '';
    }catch (e) {
        response.statusCode = 400;
        response.message = e.message;
    }
    return res.status(response.statusCode).json(response);
}
