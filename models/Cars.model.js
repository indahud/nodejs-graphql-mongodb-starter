const mongoose = require('mongoose');

const carsSchema = mongoose.Schema({
  model: String,
  year: Number,
  company: String,
});

const Cars = mongoose.model('Cars', carsSchema);
module.exports = Cars;
