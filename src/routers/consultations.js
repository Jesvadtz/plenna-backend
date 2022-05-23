const express = require("express");
const emptyBody = require("../middlewares/emptyBody");
const useCasesConsultation = require("../usesCases/consultations");
const router = express.Router({ mergeParams: true });

router.get("/:idConsultation", async (request, response) => {
  try {
    const idConsultation = request.params.idConsultation;
    const consultationFound = await useCasesConsultation.getConsultation(
      idConsultation
    );

    response.json({
      success: true,
      message: "Consultation was found successfully",
      data: {
        consultation: consultationFound,
      },
    });
  } catch (error) {
    response.status(404);
    response.json({
      success: true,
      message: "Consultation was not found",
      error: error.message,
    });
  }
});

router.get("/", async (request, response) => {
  try {
    const allConsultations = await useCasesConsultation.getAllConsultations();

    response.json({
      success: true,
      message: "All consultations",
      data: {
        consultations: allConsultations,
      },
    });
  } catch (error) {
    response.status(400);
    response.json({
      success: true,
      message: "Error to get all consultations",
      error: error.message,
    });
  }
});

router.post("/", async (request, response) => {
  try {
    const idPatient = request.params.idPatient;
    const dataConsultation = request.body;
    const newConsultation = await useCasesConsultation.createConsultation(
      dataConsultation,
      idPatient
    );

    response.json({
      success: true,
      message: "The new consultation was created successfully",
      data: {
        consultation: newConsultation,
        patient: idPatient,
      },
    });
  } catch (error) {
    response.json({
      success: false,
      message: "Error to create a consultation",
      error: error.message,
    });
  }
});

router.patch("/:idConsultation", emptyBody, async (request, response) => {
  try {
    const idConsultation = request.params.idConsultation;
    const dataConsultation = request.body;
    const updateConsultation = await useCasesConsultation.updateConsultation(
      idConsultation,
      dataConsultation
    );

    if (!idConsultation) throw new Error("The consultation was not found");

    response.json({
      success: true,
      message: "The consultation was update successfully",
      data: {
        consultation: updateConsultation,
      },
    });
  } catch (error) {
    response.json({
      success: false,
      message: "Error to update a consultation",
      error: error.message,
    });
  }
});

router.delete("/:idConsultation", async (request, response) => {
  try {
    const idConsultation = request.params.idConsultation;
    const deleteConsultation = await useCasesConsultation.deleteConsultation(
      idConsultation
    );

    if (!idConsultation) throw new Error("The consultation was not found");

    response.json({
      success: true,
      message: "The was deleted successfully",
      data: {
        consultation: deleteConsultation,
      },
    });
  } catch (error) {
    response.json({
      success: false,
      message: "Error to update a consultation",
      error: error.message,
    });
  }
});

module.exports = router;
