const express = require("express");
const router = express.Router();
const controller = require("../controllers/materiales.controller");

router.get("/categorias", controller.getCategorias);
router.get("/categoria/:categoria_id", controller.getMaterialesByCategoria);

module.exports = router;
