const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
  try {
  } catch (error) {
    response.json({
      success: false,
      message: "",
      error: error.message,
    });
  }
});

module.exports = router;
