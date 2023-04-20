// Imports
const express = require('express');
const app = new express();
const port = 80;

// Static Files
app.use(express.static(__dirname + '/public'));
// Specific folder example
// Set View's
app.set('views', './views');
app.set('view engine', 'ejs');

// Navigation
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/views/about-us.html')
})

app.get('/products', (req, res) => {
  res.sendFile(__dirname + '/views/products.html')
})

app.get('/donation', (req, res) => {
  res.sendFile(__dirname + '/views/under-maintenance.html')
})

app.get('/supports', (req, res) => {
  res.sendFile(__dirname + '/views/supports.html')
})
app.get('/uwu', (req, res) => {
  res.sendFile(__dirname + '/views/under-maintenance.html')
})
//Error 404
app.get('*', function(req, res) {
  res.status(404).sendFile(__dirname + "/views/error404.html");
})


app.listen(port, () => console.info(`App listening on port ${port}`))