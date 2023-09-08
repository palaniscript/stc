const express = require('express');
const router = express.Router();
let Students = require('../schemas/Students');

router.get('/:id', async (req, res) => {
    console.log(req.params.id)
    try {
        const student = await Students.findById(req.params.id)
        if (!student) {
            return res.status(404).send('Student not found');
        }
        res.json(student);
    }
    catch (err) {
        console.error(err);
        res.status(500).send(`Error updating student: ${err.message}`);
    }

})
module.exports = router;