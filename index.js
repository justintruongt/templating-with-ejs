const express = require('express');
const app = express()
const port = 3000;

app.set('view engine','ejs'); 

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  var title  = 'Our Home Page';
  res.render('pages/index',{title:title});
});

//about-us
app.get('/about-us', (req, res) => {
  var title  = 'Our Home Page';
  res.render('pages/about-us',{title:title});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});