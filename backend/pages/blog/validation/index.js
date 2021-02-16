const validators = require('validator');

exports.blogValidators = data =>{
    const errors = {};
    if(data.title.trim() === null || data.title.trim() === undefined || data.title.trim().length < 10){
        errors.title = 'Title must be atleast 10 character.'
    }

    if(data.description.trim() === null || data.description.trim() === undefined || data.description.trim().length < 10){
        errors.description = 'Description must be atleast 10 character.'
    }

    if(Object.keys(errors).length > 0){
        throw new Error(JSON.stringify(errors));
    }
    return {
        title: data.title.trim(),
        description: data.description.trim(),
        category_id: data.category_id
    }

}