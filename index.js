require('dotenv').config()
const express = require('express')
const app = express()

const conn = require('./helpers/connection')
const businessInfo = require('./models/businessInfo')
const owner = require('./models/owner')
const association = require('./models/association')
const businessRoutes = require('./routes/businessRoutes')

app.use(express.json())
app.use(businessRoutes)

const port = process.env.PORT
app.listen(port,()=>{
    console.log("server is running at",port)
})
