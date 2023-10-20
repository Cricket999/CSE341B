const { param, body, validationResult } = require("express-validator")

const validate = {}

validate.userValidationRules = () => {
    return [
        // Rules for first name
        body('firstName')
        .trim()
        .isLength({ min: 1 })
        .withMessage("Please provide a first name."),

        // Rules for last name
        body('lastName')
        .trim()
        .isLength({ min: 1 })
        .withMessage("Please provide a last name."),

        // Rules for email
        body('email')
        .trim()
        .isEmail()
        .normalizeEmail()
        .withMessage("Please provide a valid email."),

        // Rules for address
        body('address')
        .trim()
        .isLength({ min: 1 })
        .withMessage("Please provide an address."),

        // Rules for city
        body('city')
        .trim()
        .isLength({ min: 1 })
        .withMessage("Please provide a city."),

        // Rules for state
        body('state')
        .trim()
        .isLength({ min: 1 })
        .withMessage("Please provide a state."),

        // Rules for country
        body('country')
        .trim()
        .isLength({ min: 1 })
        .withMessage("Please provide a country."),
    ]
}

validate.userValidate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        return next()
    }
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push(err.msg))

    return res.status(400).json({
        errors: extractedErrors
    })
}

validate.checkIdRules = () => {
    return [
        param('id')
        .isLength({ min: 5 })
        .withMessage("Please provide a valid ID")
    ]
}

validate.checkIdValidate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        return next()
    }
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push(err.msg))

    return res.status(400).json({
        errors: extractedErrors
    })
}

module.exports = validate