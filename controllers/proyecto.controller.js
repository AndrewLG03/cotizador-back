const pool = require("../config/db");

exports.crearProyecto = async (req, res) => {
    try {
        const { tipo_construccion_id, area, pisos, altura, banos } = req.body;

        const [result] = await pool.query(
            `INSERT INTO proyectos (tipo_construccion_id, area, pisos, altura, banos)
             VALUES (?, ?, ?, ?, ?)`,
            [tipo_construccion_id, area, pisos, altura, banos]
        );

        res.json({ proyecto_id: result.insertId });
    } catch (err) {
        res.status(500).json({ error: "Error creando proyecto" });
    }
};

exports.guardarMaterialesProyecto = async (req, res) => {
    try {
        const { proyecto_id, materiales } = req.body;

        for (const m of materiales) {
            await pool.query(
                `INSERT INTO proyecto_materiales (proyecto_id, categoria_id, material_id)
                 VALUES (?, ?, ?)`,
                [proyecto_id, m.categoria_id, m.material_id]
            );
        }

        res.json({ message: "Materiales guardados" });
    } catch (err) {
        res.status(500).json({ error: "Error guardando materiales" });
    }
};
