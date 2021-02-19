const jwt = require('jsonwebtoken');
const privateKey = '___WATCH___ZONE___'
exports.generateToken = async user =>{
   return await jwt.sign((user),privateKey,{ expiresIn: "7d" });
}

exports.generateResetPasswordToken = async userId =>{
    const tokenInfo = {
        userId: userId,
        value: Math.random().toString(36).slice(2),
    }
    return Buffer.from(JSON.stringify(tokenInfo)).toString('base64');
}

exports.verifyToken = async token =>{
    return await jwt.verify(token, privateKey);
}
