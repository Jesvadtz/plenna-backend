const mongoose = require("mongoose");

const medicalHistorySchema = new mongoose.Schema({
  disease: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 500,
  },
  familyBackground: {
    type: String,
    required: true,
    trim: true,
  },
  habits: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 1000,
  },
  drugs: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 500,
  },
  pregnancies: {
    type: Number,
    required: true,
    trim: true,
    default: 0,
  },
  surgeries: {
    type: Number,
    required: true,
    trim: true,
    default: 0,
  },
  typeSurgeries: {
    type: String,
    trim: true,
    minlength: 2,
    maxlength: 1000,
  },
});

const model = mongoose.model("medicalHistory", medicalHistorySchema);
module.exports = model;
