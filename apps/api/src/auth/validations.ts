const Joi = require("joi")
const commonPasswordSchema = Joi.string().min(8).max(16).required()
const changePasswordSchema = Joi.object({
    password: commonPasswordSchema,
    userName: Joi.string().email().min(5).max(50).required(),
    newPassword: commonPasswordSchema,
    newPasswordConfirm: commonPasswordSchema,
})

function validateChangePasswordMiddleware(req, res, next) {
    const { error } = changePasswordSchema.validate(req.body)
    if (error) return next(new Error(error.message))
    next()
}


function isUserExist(users, userName) {
    return users.find((u) => u.userName === userName)
}

function isPasswordMatch(user, passwrod) {
    return user.password === passwrod
}

module.exports = { isUserExist, isPasswordMatch, validateChangePasswordMiddleware }