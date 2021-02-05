var express = require("express");
var driverRouter = express.Router();

const {
  changeDriverStatus,
  removeDriver,
  transporterDriversList,
  driverDetails,
} = require("../controllers/Driver/driver");
const { isAuthenticated } = require("../middleware/authGaurd");
// const { changeUserStatus } = require("../controllers/changeStatus");

// Routes for Drivers
driverRouter.get("/:transporter_id/displayDrivers", transporterDriversList);

driverRouter.get("/driverDetails/:driver_id", driverDetails);

driverRouter.post("/:transporter_id/removeDriver/:driver_id", removeDriver);

driverRouter.post("/:transporter_id/status/:driver_id", changeDriverStatus);

module.exports = driverRouter;