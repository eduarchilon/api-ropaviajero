const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

const dbConnect = () => {
  const uri = process.env.MONGODB_URI //o DB_URI where use mondb local not atlas
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((e) => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Error connecting to MongoDB:', error))
  // mongoose
  //   .disconnect()
  //   .then(() => console.log('Disconnected from MongoDB'))
  //   .catch((error) => console.error('Error disconnecting from MongoDB:', error))
}


module.exports = dbConnect
