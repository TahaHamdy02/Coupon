const Joi = require("joi")
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
module.exports = {
    userCreate: Joi.object({
        username: Joi.string().required().messages({
            'any.required': 'First name is required.',
            'string.empty': 'First name must not be empty.',
        }),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required().messages({
            'any.required': 'Email is required.',
            'string.empty': 'Email must not be empty.',
            'string.email': 'Email must be a valid email address.',
        }),
        password: Joi.string().pattern(passwordRegex).required().messages({
            'any.required': 'Password is required.',
            'string.empty': 'Password must not be empty.',
            'string.pattern': "password pattern"
        })
    })
}