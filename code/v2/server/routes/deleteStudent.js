const express = require('express');
const router = express.Router();
let Students = require('../schemas/Students');

//Delete student by ID
router.delete('/:id', async (req, res) => {
    try {
        const student = await Students.findByIdAndDelete(req.params.id);
        if (!student) {
            return res.status(404).send('Student not found');
        }
        res.send('Student deleted');
    } catch (err) {
        console.error(err);
    }
})

module.exports = router;