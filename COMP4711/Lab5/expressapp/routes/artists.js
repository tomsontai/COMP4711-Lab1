const express = require('express');

let mod = require('../artistData');

const router = express.Router();

/* router.get('/add', (req, res) => {
   console.log('Get Add button is click');
 });
 router.post('/add', (req, res) => {
   console.log('Post Add button is click');
 });
  */
router.get('/artists', (req,res) => {
    let Artists = mod.getall();
    res.render('artists', {artists: Artists });
});

router.get('/artist/add', (req,res) => {
    res.render('artistadd');
 });
  
 router.get('/artist/:id', (req,res) => {
    let id = req.params.id;
    let Artist = mod.getartist(id);
    res.render('artists', { Artists, artistCSS: true });
 });

 router.post('/artists/add', (req, res) => {
    console.log ('Add artist');
   //  let a_name = req.body.inputArtistName;
   //  let a_about = req.body.inputAbout;
   //  let a_imageURL = req.body.inputURL;
 
   //  let aOject = {
   //     name: a_name,
   //     about: a_about,
   //     url: a_imageURL
   //  }
   //  console.log("name is = " + aOject.name);
   //  console.log("about is = " + aOject.about);
   //  console.log("url is = " + aOject.url);
 
   //  mod.add(aOject);
   //  res.redirect(301, '/artists');
 });

 // Defines a custom 404 Page and we use app.use because
// the request didn't match a route (Must follow the routes)
router.use(function(req, res) {
    // Define the content type
    res.type('text/html');
   
    // The default status is 200
    res.status(404);
   
    // Point at the 404.handlebars view
    res.render('partials/404');
});

 module.exports = router;