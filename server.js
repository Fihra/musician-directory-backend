const express = require('express');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
// require('./env/config');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// const corsMiddleware = (req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
// };
// app.use(corsMiddleware);
app.use(cors());

// app.use((req ,res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//     res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
// })

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });


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

