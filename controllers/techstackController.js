const Techstack = require("../models").Techstack;

exports.postTechstack = async ( req, res ) => {
Techstack.create(req.body)
        .then(() => res.redirect('/'));
};