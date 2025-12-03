// cotizador-back/controllers/materiales.controller.js
const pool = require("../config/db");

exports.getMaterialesByCategoria = async (req, res) => {
    try {
        const { categoria_id } = req.params;
        const { tipo } = req.query; // liviano | madera | cemento

        let tipoId = null;

        if (tipo) {
            const [tipoRow] = await pool.query(
                "SELECT id FROM tipos_construccion WHERE nombre = ?",
                [tipo]
            );
            if (tipoRow.length > 0) tipoId = tipoRow[0].id;
        }

        let query = "SELECT * FROM materiales WHERE categoria_id = ?";
        const params = [categoria_id];

        if (tipoId !== null) {
            query += " AND tipo_construccion_id = ?";
            params.push(tipoId);
        }

        const [rows] = await pool.query(query, params);

        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error obteniendo materiales" });
    }
};