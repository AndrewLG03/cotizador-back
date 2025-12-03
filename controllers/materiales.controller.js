// cotizador-back/controllers/materiales.controller.js
const pool = require("../config/db");

exports.getMaterialesByCategoria = async (req, res) => {
    try {
        const { categoria_id } = req.params;
        const { tipo } = req.query;

        console.log("TIPO RECIBIDO:", tipo);

        let tipoId = null;

        if (tipo) {
            const [tipoRow] = await pool.query(
                "SELECT id FROM tipos_construccion WHERE nombre = ?",
                [tipo.trim().toLowerCase()]
            );

            console.log("Resultado tipo:", tipoRow);

            if (tipoRow.length > 0) tipoId = tipoRow[0].id;
        }

        let query = "SELECT * FROM materiales WHERE categoria_id = ?";
        let params = [categoria_id];

        if (tipoId !== null) {
        query += " AND (tipo_construccion_id = ? OR tipo_construccion_id IS NULL)";
        params.push(tipoId);
    }


        console.log("QUERY FINAL:", query, params);

        const [rows] = await pool.query(query, params);

        res.json(rows);
    } catch (err) {
        console.error("ERROR MATERIAL:", err);
        res.status(500).json({ error: "Error obteniendo materiales" });
    }
};

exports.getCategorias = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM categorias ORDER BY id");
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error obteniendo categorías" });
    }
};
