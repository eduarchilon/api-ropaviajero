const { check } = require('express-validator')
const validateResult = require('../utils/handleValidator.js')

const validatorCreateItem = [
  check('name').exists().notEmpty().isLength({ min: 2 }),
  check('price').exists().notEmpty(),
  (req, res, next) => {
    return validateResult(req, res, next)
  },
]

const validatorGetItem = [
  check('id').exists().notEmpty().isMongoId(),
  (req, res, next) => {
    return validateResult(req, res, next)
  },
]

module.exports = { validatorCreateItem, validatorGetItem }
