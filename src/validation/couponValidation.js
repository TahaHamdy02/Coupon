const Joi = require('joi')
module.exports = {
    couponCreate: Joi.object({
        title: Joi.string().required().messages({
            'any.required': 'Title is required.',
            'string.base': 'Title must be a string.',
        }),
        code: Joi.string().required().messages({
            'any.required': 'Code is required.',
            'string.base': 'Code must be a string.',
        }),
        discount: Joi.number().required().messages({
            'any.required': 'Discount is required.',
            'number.base': 'Discount must be a number.',
        }),
        discountType: Joi.string().valid('Percentage', 'Fixed Amount').required().messages({
            'any.required': 'Discount type is required.',
            'any.only': 'Invalid discount type.',
        }),
        countries: Joi.array().items(Joi.string()).required().messages({
            'any.required': 'Countries are required.',
            'array.base': 'Countries must be an array of strings.',
            'array.includesRequiredUnknowns': 'Countries must only contain valid strings.',
        }),
        expirationDate: Joi.date().required().messages({
            'any.required': 'Expiration date is required.',
            'date.base': 'Invalid expiration date.',
        }),
        isActive: Joi.boolean().messages({
            'boolean.base': 'Is active must be a boolean.',
        }),
    }),
    couponUpdate: Joi.object({
        title: Joi.string().empty('').messages({
            'string.empty': 'Title cannot be empty.',
            'string.base': 'Title must be a string.',
        }),
        code: Joi.string().empty('').messages({
            'string.empty': 'Code cannot be empty.',
            'string.base': 'Code must be a string.',
        }),
        discount: Joi.number().empty('').messages({
            'number.empty': 'Discount cannot be empty.',
            'number.base': 'Discount must be a number.',
        }),
        discountType: Joi.string().valid('Percentage', 'Fixed Amount').empty('').messages({
            'any.only': 'Invalid discount type.',
        }),
        countries: Joi.array().items(Joi.string()).empty('').messages({
            'array.includesRequiredUnknowns': 'Countries must only contain valid strings.',
        }),
        expirationDate: Joi.date().empty('').messages({
            'date.base': 'Invalid expiration date.',
        }),
        isActive: Joi.boolean().empty('').messages({
            'boolean.base': 'Is active must be a boolean.',
        }),
    })
}
