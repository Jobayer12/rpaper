const bcrypt = require('bcryptjs');
const {loadUser, createLocalUser, loginUser, updateUserInfo, updateAuthority} = require('../database-service/user.database-service')
const {userValidation, validationAuthority} = require('../validation');
const {generateToken} = require('../../../JWT');

exports.getAllUsers =async ()=>{
    return await loadUser({'u.deleted_at': null});
}

exports.createLocalUser = async user =>{
    const createUserDataValidation = await userValidation(user);
    const checkUserExistsOrNot = await loadUser({'u.deleted_at':null, 'u.email': user.email});
    if(checkUserExistsOrNot
        &&
        checkUserExistsOrNot[0].email.toLowerCase() === user.email.toLowerCase()
        &&
        checkUserExistsOrNot.length > 0)
    {
       throw new Error(JSON.stringify({message: 'user already exists'}));
    }

    user.password =  bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
    return await createLocalUser(user);
}


exports.localUserLogin = async user =>{
    const createUserDataValidation = await userValidation(user);
    const userData = await loginUser({'u.deleted_at':null, 'u.email': user.email});

    if(userData
        &&
        userData[0].email.toLowerCase() === user.email.toLowerCase()
        &&
        bcrypt.compareSync(user.password, userData[0].password))
    {
        delete userData[0].password;
        return {
            accessToken: await generateToken(userData[0])
        }
    }
    throw  new Error(JSON.stringify({message: 'Invalid auth credentials'}));
}

exports.updateUserInfo = async (id, user) =>{
    await userValidation(user);
    const checkUser = await loadUser({'u.deleted_at':null, 'u.id': id});
    if(checkUser && checkUser.length > 0){
        return await  updateUserInfo(id, user);
    }
    throw  new Error(JSON.stringify({message: 'user not exists'}));
}

exports.updateAuthority = async authority =>{
    const authorities = await validationAuthority(authority);
    const checkUser = await loadUser({'u.deleted_at':null, 'u.id': authority.user_id});
    if(checkUser && checkUser.length > 0){
        return await  updateAuthority(authority);
    }
    throw  new Error(JSON.stringify({message: 'user not exists'}));
}
