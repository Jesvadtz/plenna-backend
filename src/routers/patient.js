const express = require("express");
const emptyBody = require("../middlewares/emptyBody");
const useCasesPatient = require("../usesCases/patient");
const router = express.Router();

router.get("/:idPatient", async (request, response) => {
  try {
    const idPatient = request.params.idPatient;
    const patientFound = await useCasesPatient.getPatient(idPatient);

    response.json({
      success: true,
      message: "Patient was found successfully",
      data: {
        patient: patientFound,
      },
    });
  } catch (error) {
    response.status(404);
    response.json({
      success: true,
      message: "Patient was not found",
      error: error.message,
    });
  }
});

router.get("/", async (request, response) => {
  try {
    const allPatients = await useCasesPatient.getAllPatients();

    response.json({
      success: true,
      message: "All patients",
      data: {
        patients: allPatients,
      },
    });
  } catch (error) {
    response.status(400);
    response.json({
      success: true,
      message: "Error to get all patients",
      error: error.message,
    });
  }
});

router.post("/", emptyBody, async (request, response) => {
  try {
    const dataPatient = request.body;
    const newPatient = await useCasesPatient.createPatient(dataPatient);

    response.json({
      success: true,
      message: "The new patient was created successfully",
      data: {
        patient: newPatient,
      },
    });
  } catch (error) {
    response.json({
      success: false,
      message: "Error to create a patient",
      error: error.message,
    });
  }
});

router.patch("/:idPatient", emptyBody, async (request, response) => {
  try {
    const idPatient = request.params.idPatient;
    const dataPatient = request.body;
    const updatePatient = await useCasesPatient.updatePatient(
      idPatient,
      dataPatient
    );

    if (!idPatient) throw new Error("The patient was not found");

    response.json({
      success: true,
      message: "The patient was update successfully",
      data: {
        patient: updatePatient,
      },
    });
  } catch (error) {
    response.json({
      success: false,
      message: "Error to update a patient",
      error: error.message,
    });
  }
});

router.delete("/:idPatient", async (request, response) => {
  try {
    const idPatient = request.params.idPatient;
    const deletePatient = await useCasesPatient.deletePatient(idPatient);

    if (!idPatient) throw new Error("The patient was not found");

    response.json({
      success: true,
      message: "The was deleted successfully",
      data: {
        patient: deletePatient,
      },
    });
  } catch (error) {
    response.json({
      success: false,
      message: "Error to update a patient",
      error: error.message,
    });
  }
});

module.exports = router;
