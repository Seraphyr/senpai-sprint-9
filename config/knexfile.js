const knex = require("knex");

knex({
    client: "pg",
    connection: {
        host: "127.0.0.1",
        user: "postgres",
        password: "nueva_contraseña",
        database: "sprint9"
    }
});