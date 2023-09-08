const express = require('express')
const router = express.Router()
let Students = require('../schemas/Students')

router.put('/:id', async (req, res) => {
    try {
        const student = await Students.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        if (!student) {
            return res.status(404).send('Student not found');
        }
        res.send('student updated successfully');
    }
    catch (err) {
        console.error(err);
        res.status(500).send(`Error updating student: ${err.message}`);
    }

})
module.exports = router;