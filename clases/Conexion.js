const {
    Sequelize
} = require("sequelize")
const sequelize = new Sequelize("telefonos", "postgres", "Vuelamarte123.", {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres'
})
module.exports = sequelize