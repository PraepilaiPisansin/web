let express = require('express'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    dbConfig  = require('./database/db');
    path = require('path');

//Express Route
const peopleRoute = require('./routes/people.route');

//Connecting MongoDb Database

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, { 
    useNewUrlParser: true
}).then(() => {
    console.log('Database successfully connected');
}, 
    error => {
        console.log('Could not connected to database: ' + error)
    }
)

const app =express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors());
app.use('/people', peopleRoute);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '../build')))
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, '../build/index.html'))
    })
}

//Port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Connected to port '+ port)
});

//404 Error
app.use((req,res,next) => {
    next(createError(404))
})

//Eror handler
app.use(function(err, req, res ,next){
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
})

