const { matchedData } = require('express-validator')
const { clothesModel } = require('../models')
const { handleHttpError } = require('../utils/handleHttpError.js')

const getItems = async (req, res) => {
  try {
    const user = req.user
    const data = await clothesModel.find({})
    res.send({ data, user })
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_ALL_ITEMS')
  }
}

const createItem = async (req, res) => {
  try {
    const body = matchedData(req) //matechedData borra las cosas en caso de poner datos innecesarios y macheat con el modelo solo dejando lo necesario
    // const { body } = req
    const data = await clothesModel.create(body)
    res.send({ data })
  } catch (error) {
    handleHttpError(res, 'ERROR_CREATE_ITEM')
  }
}

const updateItem = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req)
    const data = await clothesModel.findOneAndUpdate((id, body))
    res.send({ data })
  } catch (error) {
    handleHttpError(res, 'ERROR_UPDATE_ITEM')
  }
}

const deleteItem = async (req, res) => {
  try {
    req = matchedData(req)
    const { id } = req
    const data = await clothesModel.deleteOne({ _id: id })
    res.send({ data })
  } catch (error) {
    handleHttpError(res, 'ERROR_DELETE_AN_ITEM')
  }
}

const getItem = async (req, res) => {
  try {
    req = matchedData(req)
    const { id } = req
    const data = await clothesModel.findById(id)
    res.send({ data })
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_AN_ITEM')
  }
}

module.exports = { getItems, getItem, createItem, updateItem, deleteItem }
