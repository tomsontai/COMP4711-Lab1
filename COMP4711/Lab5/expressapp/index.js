let express = require('express');  
let app = express();
var fs = require("fs");  
  
var bodyParser = require('body-parser');
var multer = require('multer');

app.set('port', process.env.PORT || 3000);

// app.use(express.static('public'));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(multer({ dest: '/tmp/'}));

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));
app.get('../Lab5.html', function (req, res) {
   res.sendFile( __dirname + "../" + "index.html" );
})

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