const { createContactus, loadAllContactUs } = require('../service/contact.service');

exports.createContactUs = async (req,res) =>{
    const response = {data: null, message: null, statusCode: 200}
    try {
        response.data = await createContactus(req.body);
    } catch (e) {
        response.statusCode = 400;
        response.message = JSON.parse(e.message);
    }
    return res.status(response.statusCode).json(response);
}

exports.loadAllContactUs = async (req,res) =>{
    const response = {data: null, message: null, statusCode: 200}
    try {
        response.data = await loadAllContactUs();
    } catch (e) {
        response.statusCode = 400;
        response.message = JSON.parse(e.message);
    }
    return res.status(response.statusCode).json(response);
}