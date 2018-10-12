require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const bodyParser = require('body-parser');
const controller = require('./controller');

const app=express();

let {
    SERVER_PORT,
    CONNECTION_STRING,
    SECRET,
}= process.env

massive(CONNECTION_STRING).then(dbInstance=>{
    app.set('db',dbInstance)
})

app.use(bodyParser.json());

app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true
}))

app.post('/api/auth/login',controller.login)
app.post('/api/auth/register',controller.register)

app.get('/api/posts',controller.posts)

app.get('/api/user-data', (req,res)=>{

    if(req.session.user){
        res.status(200).send(req.session.user)
    }else{
        res.status(401).send("Log In!")
    }
})

app.listen(SERVER_PORT, ()=>{
    console.log(`Live on port ${SERVER_PORT}` )
})