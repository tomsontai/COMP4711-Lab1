let express = require('express');  
let app = express();
var fs = require("fs");  
  
var bodyParser = require('body-parser');
var multer = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}));

app.get('/', (req, res) => res.send('Hello World!'))  
app.listen(3000, () => console.log('Server ready'))  

