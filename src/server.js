const express = require("express");
const cors = require("cors");

const scheduleRouter = require("./routers/schedule");
const patientRouter = require("./routers/patient");

const server = express();

server.use(cors());
server.use(express.json());

server.use("/getLocationAvailability", scheduleRouter);
server.use("/patients", patientRouter);

module.exports = server;
