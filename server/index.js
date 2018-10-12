require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const axios = require('axios');
const controller = require('./controller');

const app=express();

let {
    SERVER_PORT,
    CONNECTION_STRING
}= process.env

massive(CONNECTION_STRING).then(dbInstance=>{
    app.set('db',dbInstance)
})

app.post('/api/auth/login',controller.login)
app.post('/api/auth/register',controller.register)

app.listen(SERVER_PORT, ()=>{
    console.log(`Live on port ${SERVER_PORT}` )
})