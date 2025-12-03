// cotizador-back/server.js
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/tipos", require("./routes/tipos.routes"));
app.use("/api/materiales", require("./routes/materiales.routes"));
app.use("/api/proyecto", require("./routes/proyecto.routes"));
app.use("/api/cotizacion", require("./routes/cotizacion.routes"));

app.listen(4000, () => {
    console.log("Servidor corriendo en puerto 4000");
});