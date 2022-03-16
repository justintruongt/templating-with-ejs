const express = require('express');
const app = express()
const port = 3000;

app.set('view engine','ejs'); 

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  var title  = 'Seahawks Home Page';
  res.render('pages/index',{title:title});
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
});