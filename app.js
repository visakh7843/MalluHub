var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var app = express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));
app.get('/', function(req, res){
	res.render('index');
});

app.get('/about', function(req, res){
	res.render('about');
});

app.get('/contact', function(req, res){
	res.render('contact');
});
app.get('/temp1', function(req, res){
	res.render('temp1');
});
app.get('/temp2', function(req, res){
	res.render('temp2');
});
app.get('/temp3', function(req, res){
	res.render('temp3');
});
app.get('/temp4', function(req, res){
	res.render('temp4');
});
app.get('/temp5', function(req, res){
	res.render('temp5');
});
app.get('/temp6', function(req, res){
	res.render('temp6');
});
app.get('/temp7', function(req, res){
	res.render('temp7');
});
app.get('/temp8', function(req, res){
	res.render('temp8');
});
app.get('/temp9', function(req, res){
	res.render('temp9');
});
app.get('/temp10', function(req, res){
	res.render('temp10');
});
app.get('/temp11', function(req, res){
	res.render('temp11');
});
app.post('/contact/send', function(req, res){
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'mail',
			pass: 'pwd'
		}
	});
	var mailOptions = {
		from : 'Dan <aaa@gmail.com',
		to : 'bbb@gmail.com',
		subject : 'Website submission',
		text: 'You have a submission with the following details... Name: '+req.body.name+' Email : '+req.body.email+ ' Message: '+req.body.message,
		html: '<p>You have a submission with the following details...</p><ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Message: '+req.body.message+'</li></ul>'
	};

	transporter.sendMail(mailOptions,function(error,info){
		if(error)
		{
			console.log(error);
			res.redirect('/');
		}else{
			console.log('Message Sent: '+info.response);
			res.redirect('/');
		}
	});
});

app.listen(3000);
console.log('Server is running on port 3000...');
