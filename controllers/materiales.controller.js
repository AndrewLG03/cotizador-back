const pool = require("../config/db");

// ==========================
// OBTENER CATEGORÍAS
// ==========================
exports.getCategorias = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM categorias ORDER BY id");
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error obteniendo categorías" });
    }
};

// ==========================
// OBTENER MATERIALES POR CATEGORÍA
// (SIN FILTRAR POR TIPO)
// ==========================
exports.getMaterialesByCategoria = async (req, res) => {
    try {
        const { categoria_id } = req.params;

        const [rows] = await pool.query(
            "SELECT * FROM materiales WHERE categoria_id = ? ORDER BY id",
            [categoria_id]
        );

        res.json(rows);
    } catch (err) {
        console.error("ERROR MATERIAL:", err);
        res.status(500).json({ error: "Error obteniendo materiales" });
    }
};
