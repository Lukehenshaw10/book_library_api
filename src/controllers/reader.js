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
    //const readers = await Reader.findAll({where: req.query});
    try {
        res.status(200).json(readersAll);
    } catch (err) {
        res.status(500).json(err);
    }
};

//Finds a specific reader from their id number 

exports.readById = async (req, res) => {

    try { 
        const { id } = req.params;
        const reader = await Reader.findByPk(id);
    if (!reader) {
        res.status(404).json({ error: 'The reader could not be found.' });
    } else {
        res.status(200).json(reader);
    }
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.update = async (req, res) => {
    try { 
        const { readerId } = req.params;
        const updateData = req.body;
        const [ updatedRows ] = await Reader.update(updateData, { where: {readerId} });
    if(!updatedRows) {
        res.status(404).json({error: "The reader could not be found" });
    } else {
        res.status(200).send();
    }
    } catch (err) {
        res.status(500).json(err);
    }
};