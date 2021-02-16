const validator = require('validator');

exports.categoryValidation = category => {
    const errors = {};
    if (category.title === null || category.title.length <= 3){
        category.title = 'Title is too short. Atleast 3 character required';
    }
    if(Object.keys(errors).length > 0){
        throw new Error(JSON.stringify(errors));
    }
}