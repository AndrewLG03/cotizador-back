const pool = require("../config/db");

exports.getTiposConstruccion = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM tipos_construccion");
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: "Error obteniendo tipos de construcción" });
    }
};
