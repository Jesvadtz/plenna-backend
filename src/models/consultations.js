const mongoose = require("mongoose");

const consultationsSchema = new mongoose.Schema(
  {
    bloodPressure: {
      type: Number,
      required: true,
      trim: true,
      minlength: 1,
      maxlength: 4,
    },
    pulse: {
      type: Number,
      required: true,
      trim: true,
      minlength: 1,
      maxlength: 4,
    },
    temperature: {
      type: Number,
      required: true,
      trim: true,
      minlength: 1,
      maxlength: 4,
    },
    breathing: {
      type: Number,
      required: true,
      trim: true,
      minlength: 1,
      maxlength: 4,
    },
    size: {
      type: Number,
      required: true,
      trim: true,
      minlength: 1,
      maxlength: 4,
    },
    weight: {
      type: Number,
      required: true,
      trim: true,
      minlength: 1,
      maxlength: 4,
    },
    lastMenstrualPeriod: {
      type: Date,
      required: true,
      trim: true,
    },
    examination: {
      type: String,
      required: true,
      trim: true,
    },
    diagnosis: {
      type: String,
      required: true,
      trim: true,
    },
    recipe: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
      maxlength: 10000,
    },
  },
  {
    timestamps: true,
  }
);

const model = mongoose.model("consultations", consultationsSchema);
module.exports = model;
