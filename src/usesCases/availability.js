const input = require("../api/pruebaTecnica.json");

const getLocationAvailability = (availabilities = input) => {
  const availability = {};
  input.schedules.forEach((date) => {
    const slotdates = date.slotdates;
    const doctorId = date.idDoctor;

    slotdates.forEach((slotdate) => {
      if (slotdate.slots !== undefined) {
        slotdate.slots.forEach((slot) => {
          const dateFormat = new Date(slot.dateTime).toLocaleDateString();
          availability[dateFormat] = {};

          const timeFormat = new Date(slot.dateTime).toLocaleTimeString();
          availability[dateFormat].hour = timeFormat;
          availability[dateFormat].doctorId = doctorId;
        });
      }
    });
  });
  return availability;
};

module.exports = { getLocationAvailability };
