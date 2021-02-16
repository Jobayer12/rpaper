const { contactValidation } = require('../validation');
const { createContactus , loadAllContactUs} = require('../database-service/contact.database-service');

exports.loadAllContactUs = async () =>{
    return await loadAllContactUs({'c.deleted_at': null});
}

exports.createContactus = async contact =>{
    await contactValidation(contact);
    return await createContactus(contact);
}