// cotizador-back/controllers/materiales.controller.js
const pool = require("../config/db");

exports.getMaterialesByCategoria = async (req, res) => {
    try {
        const { categoria_id } = req.params;
        const { tipo } = req.query; // liviano | madera | cemento

        // Validar tipo
        if (!tipo) {
            return res.status(400).json({ error: "Debe enviar ?tipo=liviano|madera|cemento" });
        }

        // Obtener ID del tipo (1, 2 o 3)
        const [tipoRow] = await pool.query(
            "SELECT id FROM tipos_construccion WHERE nombre = ?",
            [tipo]
        );

        if (tipoRow.length === 0) {
            return res.status(400).json({ error: "Tipo de construcción inválido" });
        }

        const tipo_id = tipoRow[0].id;

        // FILTRO CORRECTO
        const [rows] = await pool.query(
            `SELECT *
             FROM materiales
             WHERE categoria_id = ?
             AND tipo_construccion_id = ?`,
            [categoria_id, tipo_id]
        );

        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: "Error obteniendo materiales" });
        console.log(err);
    }
};

