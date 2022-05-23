const express = require("express");
const useCaseAvailability = require("../usesCases/availability");
const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const schedule = request.body;
    const availabilities = await useCaseAvailability.getLocationAvailability(
      schedule
    );
    response.json({
      success: true,
      message: "",
      data: {
        availabilities: availabilities,
      },
    });
  } catch (error) {
    response.json({
      success: false,
      message: "",
      error: error.message,
    });
  }
});

module.exports = router;
