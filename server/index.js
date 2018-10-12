require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const axios = require('axios');

const app=express();

let {
    SERVER_PORT,
    CONNECTION_STRING
}= process.env

massive(CONNECTION_STRING).then(dbInstance=>{
    app.set('db',dbInstance)
})

app.listen(SERVER_PORT, ()=>{
    console.log(`Live on port ${SERVER_PORT}` )
})