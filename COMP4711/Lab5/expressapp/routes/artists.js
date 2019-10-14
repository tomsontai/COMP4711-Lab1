const express = require('express');

let mod = require('../artistData');

const router = express.Router();

router.get('/artists', (req,res) => {
    let Artists = mod.getall();
    res.render('artists', { Artists, artistCSS: true });
});

router.get('/artist/add', (req,res) => {
    res.render('artistadd' ,{formsCSS: true});
 });

 router.get('/artist/:id', (req,res) => {
    let id = req.params.id;
    let Artist = mod.getartist(id);
    res.render('artists', { Artists, artistCSS: true });
 });

 router.post('/artists/add', (req, res) => {
    let a_name = req.body.name;
    let a_about = req.body.about;
    let a_imageURL = req.body.imageURL;
 
    let aOject = {
       name: a_name,
       about: a_about,
       url: a_imageURL
    }
    console.log("name is = " + aOject.name);
    console.log("about is = " + aOject.about);
    console.log("url is = " + aOject.url);
 
    mod.add(aOject);
    res.redirect(301, '/artists');
 });

 module.exports = router;