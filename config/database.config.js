'use strict'

const mysql2 = require('mysql2')
require('dotenv').config()
 
const dbconnect = mysql2.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DATABASE,
    port: process.env.DATABASE_PORT,
})

dbconnect.connect(function(err){
    if(err) throw err
    console.log('You are now connected to mysql database...')
})

module.exports = dbconnect