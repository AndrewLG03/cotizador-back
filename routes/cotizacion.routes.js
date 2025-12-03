const express = require("express");
const router = express.Router();
const controller = require("../controllers/cotizacion.controller");

router.post("/", controller.guardarCotizacion);

module.exports = router;
