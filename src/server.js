const express = require("express");
const cors = require("cors");

const scheduleRouter = require("./routers/schedule");
const patientRouter = require("./routers/patient");
const consultationsRouter = require("./routers/consultations");

const server = express();

server.use(cors());
server.use(express.json());

server.use("/getLocationAvailability", scheduleRouter);
server.use("/patients", patientRouter);
server.use("/patients/:idPatient/consultations", consultationsRouter);
server.use("/consultations", consultationsRouter);

module.exports = server;
