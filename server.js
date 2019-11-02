require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const employeeController = require('./controllers/employeeController');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/views')));

app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');


app.listen(3000, () => {
    console.log('Express server started at port: 3000.');
});

app.get('/', function(req,res){
    res.render('index')
})

app.use('/employee', employeeController);