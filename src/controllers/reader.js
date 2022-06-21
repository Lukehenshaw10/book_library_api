const { Reader } = require('../models');

// creates a new reader to the DB
exports.create = async (req, res) => {
    const newReader = await Reader.create(req.body);
    
    try {
        res.status(201).json(newReader);
    } catch (err) {
        res.status(500).json(err);
    }
};

//Finds all readers 
exports.read = async (req, res) => {
    const readersAll = await Reader.findAll();
    
    try {
        res.status(200).json(readersAll);
    } catch (err) {
        res.status(500).json(err);
    }
};

//Finds a specific reader from their id number 

exports.readById = async (req, res) => {
    const { id } = req.params.id;
    const reader = await Reader.findByPK(id);
    
    try { 
    if (!reader) {
        res.sendStatus(404).json({ error: "Unable to find reader"});
    } else {
        res.status(200).json(reader);
    }
    }   catch (err) {
        res.status(500).json(err);
    }
};