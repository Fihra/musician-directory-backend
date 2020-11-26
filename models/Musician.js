const mongoose = require('mongoose');

const MusicianSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    instrument: String,
    youtube: String,
    website: String
});

//Export, model is what shows up in Database
module.exports = mongoose.model("Musician", MusicianSchema);