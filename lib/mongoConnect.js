const mongoose = require('mongoose');
require('dotenv').config()

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('🚀🚀 Success Connected To MongoDB');
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectMongo;