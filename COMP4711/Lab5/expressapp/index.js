let express = require('express');  
let app = express();
var fs = require("fs");  
  
var bodyParser = require('body-parser');
var multer = require('multer');

const expressHbs = require('express-handlebars');
app.engine(
    'hbs',
    expressHbs({
      layoutsDir: 'views/layouts/',
      defaultLayout: 'main',
      extname: 'hbs'
    })
  );
  app.set('view engine', 'hbs');
  app.set('views', 'views');

// app.use(express.static('public'));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(multer({ dest: '/tmp/'}));

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));
app.get('../Lab5.html', function (req, res) {
   res.sendFile( __dirname + "../" + "index.html" );
})

app.get('/', function (req,res) {
    res.render('home', { pageTitle: 'People App', heading: 'Welcome to People App'});
});

// app.get('/', (req, res) => res.send('Hello World!'))  
// app.listen(3000, () => console.log('Server ready'))  

app.post('/process_post', urlencodedParser, function (req, res) {
    // Prepare output in JSON format
    response = {
        inputArtistName:req.body.inputArtistName,
        inputAbout:req.body.inputAbout,
        inputURL:req.body.inputURL
    };
    console.log(response);
    res.end(JSON.stringify(response));
 })

// Defines a custom 404 Page and we use app.use because
// the request didn't match a route (Must follow the routes)
app.use(function(req, res) {
    // Define the content type
    res.type('text/html');
   
    // The default status is 200
    res.status(404);
   
    // Point at the 404.handlebars view
    res.render('404');
});


  // Custom 500 Page
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500);

    // Point at the 500.handlebars view
    res.render('partials/500');
});


 app.listen(3000, () => console.log('Server ready'));