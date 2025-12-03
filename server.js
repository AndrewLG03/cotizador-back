// cotizador-back/server.js
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas API
app.use("/api/tipos", require("./routes/tipos.routes"));
app.use("/api/materiales", require("./routes/materiales.routes"));
app.use("/api/proyecto", require("./routes/proyecto.routes"));
app.use("/api/cotizacion", require("./routes/cotizacion.routes"));

// Servir frontend
app.use(express.static(path.join(__dirname, "../front")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../front/index.html"));
});

// Puerto
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});