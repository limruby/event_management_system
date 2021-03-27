require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');

const studentController = require('./controllers/studentController');


var con = express();
con.use(bodyparser.urlencoded({
extended: true
}));
con.use(bodyparser.json());
con.set('views', path.join(__dirname, '/views/'));
con.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainlayout', layoutsDir: __dirname + '/views/layouts/' }));
con.set('view engine', 'hbs');

con.listen(5050, () => {
console.log('Now starting at port: 5050');
});

con.use('/student', studentController);