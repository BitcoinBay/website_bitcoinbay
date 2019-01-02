const express = require('express');
const router = express.Router()
const axios = require('axios');

const bch = require('./blockexplorer/bch');
const tbch = require('./blockexplorer/tbch');
const eth = require('./blockexplorer/eth');

router.get('/', (req, res) => {
    res.json({ sample: 1 })
})

router.use('/bch', bch)
router.use('/tbch', tbch)
module.exports = router;
