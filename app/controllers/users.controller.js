
var User = require('../models/user.js');
var express = require('../../config/express');
var mongoose = require('../../config/mongoose');

var app = express();
//To create the wish list
app.post('/Signup', (req, res) => {
    console.log("posted");
    const userData = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body,email
    };
    
    db.User('User').insert(userData, (err, result) => {
        if (err) {
            res.send({
                'error': 'An error has occurred'
            });
        } else {
            res.send(result.firstName);
        }
    });
});