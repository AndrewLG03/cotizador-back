// cotizador-back/controllers/cotizacion.controller.js
const pool = require("../config/db");

exports.guardarCotizacion = async (req, res) => {
    try {
        const { proyecto_id, total } = req.body;

        const [result] = await pool.query(
            `INSERT INTO cotizaciones (proyecto_id, total)
             VALUES (?, ?)`,
            [proyecto_id, total]
        );

        res.json({ cotizacion_id: result.insertId });
    } catch (err) {
        res.status(500).json({ error: "Error guardando cotización" });
    }
};
