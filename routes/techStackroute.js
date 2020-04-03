import express from 'express';
const router = express.Router();
const Techstack = require("../models").Techstack;

router.post('/techstacks', (req, res) => {
    Techstack.create(req.body)
        .then(() => res.redirect('/'));
});

module.exports = router;