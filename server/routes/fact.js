const express = require('express');
const router = express.Router();

const Fact = require('../models/Fact');

//Routes

// @route   GET /facts
// @desc    Get Facts
// @access  Public
router.get('/list_all_facts', (req, res) => {
    Fact.find()
        .then(facts => res.json(facts))
});

// @route   POST /facts
// @desc    Create A Fact
// @access  Public
router.post('/savefact', (req, res) => {
    const newFact = new Fact({
        message: req.body.message
    });

    newFact.save().then(fact => res.json(fact)).catch((err) => console.log(err));
});

/*
router.post('/', (req, res) => {
    console.log(JSON.stringify(req.body));
});
*/

router.get('/randomfact', (req, res) => {
    Fact.countDocuments().exec(function (err, count) {
        var random = Math.floor(Math.random() * count)

        Fact.findOne().skip(random).exec().then(fact => res.json(fact))
    });
    //console.log("FACT GOT");
})

module.exports = router;