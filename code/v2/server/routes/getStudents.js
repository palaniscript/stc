const express = require('express');
const router = express.Router();
let Students = require('../schemas/Students');

router.get('/', async(req, res)=>{
    try{
        const response = await Students.find()
        res.json(response)
    }
    catch(err){
        res.status(500).send(`Error adding student: ${err.message}`);
    }

});
module.exports = router;