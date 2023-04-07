const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      select: false, //para que no apoaresca
    },
    role: {
      type: ['user', 'admin'],
      default: 'user',
    },
  },
  {
    timestamps: true, //TODO createdAt, updateAt
    versionKey: false,
  },
)

module.exports = mongoose.model('users', usersSchema)
