const express = require('express');

const router = express.Router();

router.post('/', (req, res) =>{
    res.json({id:1, content: 'hi'});
    console.log("post!!!");
}) 

router.delete('/', (req, res) =>{
    res.json({id:1, content: 'hi'});
    console.log("post!!!");
}) 

module.exports = router;