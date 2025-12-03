const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    host: "tiusr35pl.cuc-carrera-ti.ac.cr",
    port: 3306,
    user: "Andres",
    password: "AndresyDiego123",
    database: "cotizador_construccion",
});

module.exports = pool;
