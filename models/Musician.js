const mongoose = require('mongoose');

const MusicianSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    avatar: {
        type: String,
        require: false,
        default: "N/A"  
    },
    alias: {
        type: String,
        require: false
    },
    instrument: {
        type: String,
        require: true
    },
    voiceRange: {
        type: String,
        require: false,  
    },
    productionSkills: String,
    audioGear: String,
    misc: {
        type: String,
        require: false,
        default: "N/A"
    },
    youtube: {
        type: String,
        require: false,
        default: "N/A" 
    },
    twitter: {
        type: String,
        require: false,
        default: "N/A" 
    },
    soundcloud: {
        type: String,
        require: false,
        default: "N/A" 
    },
    twitch: {
        type: String,
        require: false,
        default: "N/A" 
    },
    spotify: {
        type: String,
        require: false,
        default: "N/A" 
    },
    bandcamp: {
        type: String,
        require: false,
        default: "N/A" 
    },
    instagram: {
        type: String,
        require: false,
        default: "N/A" 
    },
    website: {
        type: String,
        require: false,
        default: "N/A" 
    },
    sample1: {
        type: String,
        require: false,
        default: "N/A"
    },
    sample2: {
        type: String,
        require: false,
        default: "N/A"
    }
});

//Export, model is what shows up in Database
module.exports = mongoose.model("Musician", MusicianSchema);