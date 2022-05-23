const Patient = require("../models/patient");

function getAllPatients() {
  return Patient.find({});
}

function getPatient(idPatient) {
  return Patient.findById(idPatient)
    .populate("medicalHistory", { disease: 1, familyBackground: 1 })
    .populate("medicalConsultations", {
      examination: 1,
      diagnosis: 1,
      recipe: 1,
    });
}

async function createPatient(dataPatient) {
  const { name, lastName, telephone, email, age, medicalHistory } = dataPatient;
  const patientFound = await Patient.findOne({ name, lastName, email });

  if (patientFound) throw new Error("This patient already exists");

  return Patient.create({
    name,
    lastName,
    telephone,
    email,
    age,
    medicalHistory,
  });
}

function updatePatient(idPatient, dataPatient) {
  return Patient.findByIdAndUpdate(idPatient, dataPatient, { new: true });
}

function deletePatient(idPatient) {
  return Patient.findByIdAndDelete(idPatient);
}

module.exports = {
  getAllPatients,
  getPatient,
  createPatient,
  updatePatient,
  deletePatient,
};
