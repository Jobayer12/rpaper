const validator = require('validator');

exports.userValidation = user => {
    const errors= {}
    if(user.first_name)
        if (user.first_name.length < 3)
            errors.first_name = "Firstname is too short. Atleast 3 character required";
    if(user.last_name)
        if (user.last_name.length < 3)
            errors.last_name = "Lastname is too short. Atleast 3 character required";
    if(user.email)
        if (!validator.default.isEmail(user.email))
            errors.email = "Not valid Email";
    if(user.password)
        if (user.password.length < 5)
            errors.password = "Password length atleast 6 character.";
    if(user.phone){
        if(user.password.length < 10)
            errors.phone = 'Not valid phone number';
        if(!validator.default.isNumeric(user.phone))
            errors.phone = 'Not valid phone number';
    }
    if(Object.keys(errors).length > 0){
        throw new Error(JSON.stringify(errors));
    }
}

exports.validationAuthority = authority =>{
    const errors = {};
    if(authority.authority_id === undefined || authority.authority_id === null || authority.authority_id.length < 1){
        errors.authority_id = 'Invalid authority'
    }
    if(Object.keys(errors).length > 0){
        throw new Error(JSON.stringify(errors));
    }
    return {
        userId: authority.user_id,
        authorityId: authority.authority_id
    }
}