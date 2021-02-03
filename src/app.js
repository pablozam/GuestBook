const express = require('express');
const path = require('path');
const morgan = require('morgan');

//Initializations 
const app = express();

//Settings

// define el puerto del servidor, en caso que exista una variable con el mismo nombre la tome, caso contrario use el 3000
app.set('port', process.env.PORT || 3000); 
app.set('views', path.join(__dirname,'views')); //definir la carpeta de las vistas
app.set('view engine', 'ejs'); //define el motor de plantillas ejs

//Middlewares
app.use(morgan('dev')); 
app.use(express.urlencoded({extended: false})); //obtiene datos del cliente y transforma en formato json

//Routes
app.use(require('./routes/entries.routes'));

// 404 handler
app.use((req, res) => {
    res.status(404).render('404');
});

//Starting App
//Obtiene el puerto que se defnio anteriormente
app.listen(app.get('port'), () => {
    console.log('Server on port:', app.get('port'));
});