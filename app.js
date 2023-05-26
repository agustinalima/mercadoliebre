const express = require('express');
const path = require('path');
const app = express();


// le doy acceso publico a la carpeta public
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, '/views/index.html'))
})

app.listen(3000, function(){
    console.log('Servidor arriba!')
});