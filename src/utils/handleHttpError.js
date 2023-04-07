const handleHttpError = (
  res,
  message = 'not exists message in handleHttpError',
  code = 403,
) => {
  res.status(code)
  res.send({ error: message })
}

module.exports = { handleHttpError }
