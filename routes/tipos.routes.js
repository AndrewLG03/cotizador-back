// cotizador-back/routes/tipos.routes.js
const express = require("express");
const router = express.Router();
const controller = require("../controllers/tipos.controller");

router.get("/", controller.getTiposConstruccion);

module.exports = router;