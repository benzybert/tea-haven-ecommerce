const mongoose = require('mongoose');

const teaSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  origin: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  steepTime: {
    type: String,
    required: true
  },
  temperature: {
    type: String,
    required: true
  },
  quantity: {
    type: String,
    required: true
  },
  inStock: {
    type: Boolean,
    default: true
  },
  isNew: {
    type: Boolean,
    default: false
  },
  imageUrl: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const Tea = mongoose.model('Tea', teaSchema);

module.exports = Tea;