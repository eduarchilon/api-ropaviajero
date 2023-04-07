const { Decimal128 } = require('mongodb')
const mongoose = require('mongoose')

const clothesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    price: {
      type: Decimal128,
    },
  },
  {
    timestamps: true, //TODO createdAt, updateAt
    versionKey: false,
  },
)

module.exports = mongoose.model('clothes', clothesSchema)
