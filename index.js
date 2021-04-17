const express = require('express');
const app = express();

app.use(express.static('public'));

// Delete the route below

// Delete up to here

// Change the URL of the route to the root URL
// app.get('/', (req, res) => {
//   res.render('top.ejs');
// });


app.get('/index', (req, res) => {
  res.render('index.ejs');
});

app.get('/contact', (req, res) => {
    res.render('elements.ejs');
  });

app.get('/left-sidebar', (req, res) => {
    res.render('left-sidebar.ejs');
  });

app.get('/right-sidebar', (req, res) => {
    res.render('right-sidebar.ejs');
  });

app.get('/elements', (req, res) => {
    res.render('elements.ejs');
  });

app.get('/services', (req, res) => {
    res.render('services.ejs');
  });

app.listen(process.env.PORT || 3000);
