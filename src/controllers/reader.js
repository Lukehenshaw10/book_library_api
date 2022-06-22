const { Reader } = require('../models');

// creates a new reader to the DB
exports.create = async (req, res) => {    
    try {
        const newReader = await Reader.create(req.body);
        res.status(201).json(newReader);
    } catch (err) {
        if (err.errors[0].type === 'Validation error' || 'notNull Violation') {
            res.status(400).json(err.message);
          }
          else { 
            res.status(500).json(error) };
    }
};

//Finds all readers 
exports.read = async (req, res) => {
    //const readers = await Reader.findAll({where: req.query});
    try {
        const readersAll = await Reader.findAll();
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

//Finds a specific reader from their id number and update their info

exports.update = async (req, res) => {
    try { 
        const { id } = req.params;
        const updateData = req.body;
        const [ updatedRows ] = await Reader.update(updateData, { where: {id} });
    if(!updatedRows) {
        res.status(404).json({error: "The reader could not be found." });
    } else {
        res.status(200).send();
    }
    } catch (err) {
        res.status(500).json(err);
    }
};

//deletes reader at specified id 

exports.destroy = async (req, res) => {
    try { 
        const { id } = req.params;
        const  deletedRows  = await Reader.destroy({  where: { id } });
    if(!deletedRows) {
        res.status(404).json({error: "The reader could not be found." });
    } else {
        res.status(204).send();
    }
    } catch (err) {
        res.status(500).json(err);
    }
};