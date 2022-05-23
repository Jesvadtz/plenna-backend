const mongoose = require("mongoose");
const medicalHistorySchema = "./medicalHistory";

const pacientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 50,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 50,
  },
  telephone: {
    type: Number,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    match: /.+@.+\..+/,
  },
  age: {
    type: Number,
    required: true,
    trim: true,
  },
  medicalHistory: medicalHistorySchema,
  medicalConsultations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "medicalConsultations",
    },
  ],
});

const model = mongoose.model("pacient", pacientSchema);
module.exports = model;
