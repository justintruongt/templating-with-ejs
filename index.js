const express = require('express');
const app = express()
const port = 3000;

//Here's our test data
var data = require('./data/test.json');

app.set('view engine','ejs'); 

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  var title  = 'Seahawks Home Page';
  res.render('pages/index',{title:title});
});

//users index is our list page
app.get('/users', function(req, res) {
	var title = 'Users Page';
	res.render('users/index', {
    	title: title,
    	users: data
	});
});

//add user/view route - we are cheating by using the array index - 1
app.get('/users/view/:id', function(req, res) {
 var title = 'User Page';
 var id = req.params.id;
 res.render('users/view', {
     title: title,
     user: data[--id]
 });
});


//Info
app.get('/Info', (req, res) => {
  var title  = 'Info Page';
  res.render('pages/Info',{title:title});
});






//Rivals
app.get('/Rivals', (req, res) => {
  var title  = 'Rivals Page';
  res.render('pages/Rivals',{title:title});
});
//Superbowls
app.get('/Superbowls', (req, res) => {
  var title  = 'Superbowls Page';
  res.render('pages/Superbowls',{title:title});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(data);
});