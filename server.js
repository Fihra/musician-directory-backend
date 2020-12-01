const express = require('express');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
// require('./env/config');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());

const port = 3001;

//Middlewares
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());

//Import Routes
const musiciansRoute = require('./routes/musicians');

//Everytime you go to this URL, use musiciansRoute
app.use('/musicians', musiciansRoute)


//Routes
app.get('/', (req, res) => {
    res.send("Musician's API");
})

//Connect to DB 
const db = 'mongodb://localhost:27017/MusicianDB';
mongoose.connect(db,  
{ useNewURLParser: true}, 
() => console.log("DB is connected")
);

app.listen(port, () => console.log("Listening for port: " + port));

