const { check } = require('express-validator')
const validateResult = require('../utils/handleValidator.js')

const validatorRegister = [
  check('name').exists().notEmpty().isLength({ min: 3, max: 15 }),
  check('email').exists().notEmpty().isEmail(),
  check('password').exists().notEmpty().isLength({ min: 5, max: 8 }),
  (req, res, next) => {
    return validateResult(req, res, next)
  },
]

const validatorLogin = [
  check('email').exists().notEmpty().isEmail(),
  check('password').exists().notEmpty().isLength({ min: 5, max: 8 }),
  (req, res, next) => {
    return validateResult(req, res, next)
  },
]

module.exports = { validatorRegister, validatorLogin }
