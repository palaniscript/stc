const express = require('express')
const router = express.Router()
let Students = require('../schemas/Students')


router.post('/', async(req, res)=>{
    try{
        const student = new Students(req.body)
        await student.save()
        res.status(201).send(student)
    }
    catch {
        res.status(500).send('something went wrong')
    }

})
module.exports = router;