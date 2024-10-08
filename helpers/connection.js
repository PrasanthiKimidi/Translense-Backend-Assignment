const {Sequelize} = require('sequelize')

const username = process.env.USER
const password = process.env.PASSWORD
const host = process.env.HOST
const database = process.env.DB_NAME
// console.log("user",username)
const sequelize = new Sequelize(database,'prasanthi',password,{
    host:'localhost',
    dialect:'mysql'
})

module.exports = sequelize