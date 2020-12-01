const express = require('express');
const Musician = require("../models/Musician");

const router = express.Router();

//Gets all Musicians
router.get('/', async (req, res) => {
    try{
        const musicians = await Musician.find();
        res.json(musicians);
    }catch(err){
        res.json({message: err})
    }
})

//Creates new Musician
router.post('/', async (req, res) => {
    console.log(req.body)
    const musician = new Musician({
        name: req.body.name,
        instrument: req.body.instrument,
        alias: req.body.alias,
        youtube: req.body.youtube,
        twitter: req.body.twitter,
        soundcloud: req.body.soundcloud,
        twitch: req.body.twitch,
        bandcamp: req.body.bandcamp,
        website: req.body.website,
        sample1: req.body.sample1,
        sample2: req.body.sample2,
        vocalRange: req.body.vocalRange,
        productionSkills: req.body.productionSkills,
        audioGear: req.body.audioGear,
        misc: req.body.misc,
        spotify: req.body.spotify,
        instagram: req.body.instagram,
        

    })
    try{
        console.log(musician);
        const savedMusician = await musician.save();
        
        res.json(savedMusician);
    }catch(err){
        res.json({message: err})
    }
    
})

//Get One Musician
router.get('/:musicianId', async (req, res) => {
    const musician = await Musician.findById(req.params.musicianId);
    try{
        res.json(musician);
    }catch(err){
        res.json({message: err})
    }
})

//Update Musician
router.patch('/:musicianId', async (req, res) => {
    try{
        const updateMusician = await Musician.updateOne({_id: req.params.musicianId} , {$set: {
            name: req.body.name,
            avatar: req.body.avatar,
            instrument: req.body.instrument,
            alias: req.body.alias,
            youtube: req.body.youtube,
            twitter: req.body.twitter,
            soundcloud: req.body.soundcloud,
            twitch: req.body.twitch,
            bandcamp: req.body.bandcamp,
            vocalRange: req.body.vocalRange,
            productionSkills: req.body.productionSkills,
            audioGear: req.body.audioGear,
            misc: req.body.misc,
            website: req.body.website,
            spotify: req.body.spotify,
            instagram: req.body.instagram,

        }});
        res.json(updateMusician);
    } catch(err){
        res.json({message: err})
    }
})

//Delete Musician
router.delete('/:musicianId', async (req, res) => {
    
    try{
        const removedMusician = await Musician.deleteOne({_id: req.params.musicianId});
    }catch(err){
        res.json({message: err})
    }
    
})

module.exports = router;