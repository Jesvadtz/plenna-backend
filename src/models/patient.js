const mongoose = require("mongoose");
const medicalHistorySchema = require("./medicalHistory");

const patientSchema = new mongoose.Schema(
  {
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
    consultations: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "consultations",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const model = mongoose.model("patient", patientSchema);
module.exports = model;
