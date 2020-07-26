const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const fs = require('fs')

const app = express()

const PORT = config.get('port') || 5000;
var http = require('http').Server(app);


http.listen(PORT, function(){
    console.log('HTTP server started on port ', PORT);
});

//Маршрутизация по страницам

//страницы регистрация, войти, об авторах
app.get('/', function (req, res ) {
    res.sendFile(__dirname + '/src/list/master.html')
});


app.get('/create', function (req, res){
    res.sendFile(__dirname + '/src/list/create.html');
});


app.get('/login', function (req, res){
    res.sendFile(__dirname + '/src/list/login.html');
});


app.get('/info', function (req, res){
    res.sendFile(__dirname + '/src/list/info.html');
})

//страницы авторизованого пользователя
app.get('/mmmexican', function (req, res){
    res.sendFile(__dirname + '/src/list/mmmexican.html');
})

app.get('/chat', function (req, res){
    res.sendFile(__dirname + '/src/list/chat.html');
})
