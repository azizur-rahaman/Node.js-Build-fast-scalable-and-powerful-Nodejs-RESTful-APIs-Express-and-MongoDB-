const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Create a new User
router.post('/', async (req, res) => {
    const newUser = await User.create(req.body);
    try{
        res.status(201).json(newUser);
    }catch(err){
        res.status(400).json({message: err.message});
    }
});

// Get all Users
router.get('/', async (req, res) => {
    try{
        let users = await User.find();
        res.status(200).json(users);
    }catch(error){
        res.status(500).json({message: error.message});
    }
});

// Get used by ID
router.get('/:id', async (req, res) => {
    try{
        let user = await User.findById(req.params.id);
        if(!user) return res.status(404).json({message: 'User not found'});
        res.status(200).json(user);
    }catch(error){
        res.status(500).json({message: error.message});
    }
});

// Update user by ID
router.put('/:id', async (req, res) => {
    try{
        let updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
        if(!updatedUser) return res.status(4004).json({message: "User not found"});
        res.status(200).json(updatedUser);
    }catch(error){
        res.status(400).json({message: error.message});
    }
});


// Delete User by ID

router.delete('/:id', async (req, res) =>{
    try{
        let deletedUser = await User.findByIdAndDelete(req.params.id);
        if(!deletedUser) return res.status(400).json({message: "Unsuccessful"});
        res.status(200).json({message: 'User deleted successfully'});
    }catch(error){
        res.status(500).json({message: error.message});
    }
});

module.exports = router;


