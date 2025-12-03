// cotizador-back/routes/proyecto.routes.js
const express = require("express");
const router = express.Router();
const controller = require("../controllers/proyecto.controller");

router.post("/", controller.crearProyecto);
router.post("/materiales", controller.guardarMaterialesProyecto);

module.exports = router;
