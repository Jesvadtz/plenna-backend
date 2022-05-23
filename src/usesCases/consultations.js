const Consultation = require("../models/consultations");
const Patient = require("../models/patient");

function getAllConsultations() {
  return Consultation.find({}).populate("patient", { name: 1, lastName: 1 });
}

function getConsultation(idConsultation) {
  return Consultation.findById(idConsultation).populate("patient", {
    name: 1,
    lastName: 1,
  });
}

async function createConsultation(dataConsultation, idPatient) {
  const {
    bloodPressure,
    pulse,
    temperature,
    breathing,
    size,
    weight,
    lastMenstrualPeriod,
    examination,
    diagnosis,
    recipe,
  } = dataConsultation;
  const patient = await Patient.findById(idPatient);

  const newConsultation = Consultation({
    bloodPressure,
    pulse,
    temperature,
    breathing,
    size,
    weight,
    lastMenstrualPeriod,
    examination,
    diagnosis,
    recipe,
    patient: idPatient,
  });
  const savedConsultation = await newConsultation.save();

  patient.consultations.addToSet(savedConsultation._id);
  await patient.save();

  return savedConsultation;
}

function updateConsultation(idConsultation, dataConsultation) {
  return Consultation.findByIdAndUpdate(idConsultation, dataConsultation, {
    new: true,
  });
}

function deleteConsultation(idConsultation) {
  return Consultation.findByIdAndDelete(idConsultation);
}

module.exports = {
  getAllConsultations,
  getConsultation,
  createConsultation,
  updateConsultation,
  deleteConsultation,
};
