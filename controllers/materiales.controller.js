const pool = require("../config/db");

exports.getCategorias = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM categorias");
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: "No se pudieron obtener las categorías" });
    }
};

exports.getMaterialesByCategoria = async (req, res) => {
    try {
        const { categoria_id } = req.params;
        const [rows] = await pool.query(
            "SELECT * FROM materiales WHERE categoria_id = ?",
            [categoria_id]
        );
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: "Error obteniendo materiales" });
    }
};
