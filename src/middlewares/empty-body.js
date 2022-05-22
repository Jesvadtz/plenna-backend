function emptyBody(request, response, next) {
  try {
    const data = request.body;
    const { method } = request;
    if (
      Object.keys(data).length === 0 &&
      (method === "POST" || method === "PUT" || method === "PATCH")
    ) {
      throw new Error("You need data");
    } else {
      next();
    }
  } catch (error) {
    response.status(400);
    response.json({
      success: false,
      message: "The body is empty",
      error: error.message,
    });
  }
}

module.exports = emptyBody;
