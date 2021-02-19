const {
    getAllUsers,
    createLocalUser,
    localUserLogin,
    updateUserInfo,
    updateAuthority,
    resetPassword,
    changePassword
} = require('../service/user.service');

exports.getAllUser = async (req, res) => {
    const response = {data: null, errors: null, statusCode: 200}
    try {
        response.data = await getAllUsers();
    } catch (e) {
        response.statusCode = 400;
        response.errors = JSON.parse(e.message);
    }
    return res.status(response.statusCode).json(response);
}

exports.createLocalUser = async (req, res) => {
    const response = {data: null, errors: null, statusCode: 200}
    try {
        response.data = await createLocalUser(req.body);
    } catch (e) {
        response.statusCode = 400;
        response.errors = JSON.parse(e.message);
    }
    return res.status(response.statusCode).json(response);
}

exports.login = async (req, res) => {
    const response = {data: null, errors: null, statusCode: 200}
    try {
        response.data = await localUserLogin(req.body);
    } catch (e) {
        response.statusCode = 400;
        response.errors = JSON.parse(e.message);
    }
    return res.status(response.statusCode).json(response);
}

exports.updateUserInfo = async (req, res) => {
    const response = {data: null, errors: null, statusCode: 200}
    try {
        response.data = await updateUserInfo(req.loggedInUserInfo.id, req.body);
    } catch (e) {
        response.statusCode = 400;
        response.errors = JSON.parse(e.message);
    }
    return res.status(response.statusCode).json(response);
}

exports.updateAuthority = async (req, res) => {
    const response = {data: null, errors: null, statusCode: 200}
    try {
        response.data = await updateAuthority(req.body);
    } catch (e) {
        response.statusCode = 400;
        response.errors = JSON.parse(e.message);
    }
    return res.status(response.statusCode).json(response);
}

exports.resetPassword = async(req, res) =>{
    const response = {data: null, errors: null, statusCode: 200}
    try {
        const resetEmail = req.body.email;
        console.log('email', resetEmail);
        response.data = await resetPassword(resetEmail);
    } catch (e) {
        response.statusCode = 400;
        response.errors = JSON.parse(e.message);
    }
    return res.status(response.statusCode).json(response);
}

exports.changePassword = async (req, res) =>{
    const response = {data: null, errors: null, statusCode: 200}
    try {
        const { token } = req.params;
        const passwordInfo = { newPassword, confirmPassword } = req.body;
        response.data = await changePassword(token, passwordInfo);
    } catch (e) {
        console.log('error message', e);
        response.statusCode = 400;
        response.errors = JSON.parse(e.message);
    }
    return res.status(response.statusCode).json(response);
}
