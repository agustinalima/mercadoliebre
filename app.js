const express = require('express');
const path = require('path');
const app = express();


// le doy acceso publico a la carpeta public
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, '/views/index.html'))
})

app.get('/register', (req,res) =>{
    res.sendFile(path.join(__dirname, '/views/register.html'))
})

app.get('/login', (req,res) =>{
    res.sendFile(path.join(__dirname, '/views/login.html'))
})

app.listen(3000, function(){
    console.log('Servidor arriba!')
});