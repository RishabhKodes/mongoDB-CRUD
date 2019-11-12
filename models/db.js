const mongoose = require('mongoose');

// connect to mongodb
// var url = `mongodb+srv://dbUser:password%401234@cluster0-hvdde.mongodb.net/test?retryWrites=true&w=majority`;
// add mongodb atlas link here--
mongoose.connect('mongodb://localhost:27017/EmployeeDB', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('Connected to the DB :)') }
    else { console.log('Error in DB connection : ' + err) }
});




