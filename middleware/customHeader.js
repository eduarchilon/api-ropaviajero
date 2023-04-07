const customHeader = (req, res, next) => {
  //Podria crear un custom header con un api key para consultas en base de datos
  next()
}

module.exports = customHeader
