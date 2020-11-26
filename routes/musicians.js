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
    const musician = new Musician({
        name: req.body.name,
        instrument: req.body.instrument,
        youtube: req.body.youtube,
        website: req.body.website
    })
    try{
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
            instrument: req.body.instrument,
            youtube: req.body.youtube,
            website: req.body.website
        }});
        res.json(updatedMusician);
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