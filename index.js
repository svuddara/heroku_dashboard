var cool = require('cool-ascii-faces');
var express = require('express');
var app = express();
var http = require('http');
var fs = require('fs');
var bodyParser = require('body-parser');


app.set('port', (process.env.PORT || 5000));
// Create application/x-www-form-urlencoded parser
//Note that in version 4 of express, express.bodyParser() was
//deprecated in favor of a separate 'body-parser' module.
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/login', function(request, response) {
  response.sendfile('login.html');
});

app.post('/myaction', function(req, res) {
	console.log('You sent the name "' + req.body.username + '".');
	if(req.body.username == 'dash' && req.body.password == 'visa'){
		res.sendfile('dashboard.html');		
	}else{
		res.send('Incorrect credentials');
	}
  
});

app.get('/cool', function(request, response) {
  response.send(cool());
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});




