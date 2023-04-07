const bycryptjs = require('bcryptjs')

const encrypt = async (passwordPlain) => {
  const hash = await bycryptjs.hash(passwordPlain, 10)
  return hash
}

const compare = async (passwordPlain, hash) => {
  return await bycryptjs.compare(passwordPlain, hash)
}

module.exports = { encrypt, compare }
