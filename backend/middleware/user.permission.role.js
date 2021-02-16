'use strict'

exports.userPermissionRole = function (role) {
    return async (req, res, next) => {
        try {
            if (role.includes(req.loggedInUserInfo.authorities.name)) {
                next();
            } else {
                return res.status(404).json({
                    statusCode: 404,
                    errors: {
                        message: 'You are not authorize in this action.',
                    },
                    data: null
                })
            }

        } catch (e) {
            return res.status(404).json({
                statusCode: 404,
                errors: {
                    message: e.message,
                },
                data: null
            })
        }
    }
}