var express = require("express");
var driverRouter = express.Router();

const {
  changeDriverStatus,
  removeDriver,
  transporterDriversList,
  driverDetails,
  verifyDriver,
} = require("../controllers/Driver/driver");
const { isAuthenticated } = require("../middleware/authGaurd");

// Routes for Drivers
// driverRouter.get("/:transporter_id/displayDrivers", transporterDriversList);

driverRouter.get("/:transporter_id/driverDetails/:driver_id", driverDetails);

driverRouter.post("/:transporter_id/removeDriver/:driver_id", removeDriver);

driverRouter.post("/:transporter_id/status/:driver_id", changeDriverStatus);

driverRouter.post("/:transporter_id/verifyDriver/:driver_id", verifyDriver);

module.exports = driverRouter;
