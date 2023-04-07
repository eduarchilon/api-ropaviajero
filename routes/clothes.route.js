const express = require('express')
const {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} = require('../controllers/clothes.controller.js')
const router = express.Router()
const {
  validatorCreateItem,
  validatorGetItem,
} = require('../validators/clothes.validator.js')
const customHeader = require('../middleware/customHeader.js')
const authMiddleware = require('../middleware/session.js')

router.get('/', getItems) // add ..., authMiddleware ,...
router.get('/:id', validatorGetItem, getItem)
router.post('/', validatorCreateItem, customHeader, createItem)
router.put('/:id', validatorGetItem, validatorCreateItem, updateItem)
router.delete('/:id', validatorGetItem, deleteItem)

module.exports = router
