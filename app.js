const express =  require('express');

const  { engine  } = require('express-handlebars');

const bodyParser = require("body-parser");

const path = require('path');


const sessions = require('express-session');


const db = require('./configs/db');

const fetch = require('node-fetch');

//Routes

const homeRoute = require('./routes/home');

require('dotenv').config({
    path: './.env'
});


const app = express();



app.use(bodyParser.urlencoded({
    extended:true
}));

const oneDay = 1000 * 60 * 60 * 24;

app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false 
}));


app.engine('handlebars', engine());

app.set('view engine', 'handlebars');
app.set('views', './views');
// app.use('/users/assets', express.static(path.join('.', 'assets')));
app.use('/assets', express.static(path.join('.', 'assets')));
app.use('/actualites/assets/', express.static(path.join('.', 'assets')));
app.use('/uploads', express.static('uploads'));



app.use('/',homeRoute);


// const port = process.env.PORT
// app.listen(port, () => {
// 	console.log(`Server started on ${port}`);
// });

// db().then(_ => {
//     const port = process.env.PORT
//     app.listen(port, () => {
//         console.log(`Server started on ${port}`);
//     });
// });

// const port = process.env.PORT
app.listen(3400, () => {
    console.log(`Server started on ${3400}`);
});