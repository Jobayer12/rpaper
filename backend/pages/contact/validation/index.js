const validator = require('validator');

exports.contactValidation = async contact => {
    const errors = {};
    if ((contact.message && contact.message.length < 10))
        errors.message = 'message is too short. Atleast 10 character required';
    if ((contact.name && contact.name.length < 3))
        errors.name = 'Name is too short. Atleast 3 character required';
    if (contact.email && !validator.default.isEmail(contact.email))
        errors.email = 'Not valid email';
    if ((contact.subject && contact.subject.length < 5))
        errors.subject = 'message is too short. Atleast 5 character required';
    if(Object.keys(errors).length > 0){
        throw new Error(JSON.stringify(errors));
    }
}