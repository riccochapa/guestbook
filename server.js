const express = require('express');
const bodyParser= require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient;

var db

MongoClient.connect('mongodb://####:####@ds047622.mlab.com:####/#######', (err, database) => {
  if (err) return console.log(err)
  db = database
    app.listen(3000, () => {
      console.log('listening on 3000')
  })
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.use(bodyParser.urlencoded({extended: true}));

app.post('/signIn', (req, res) => {
  db.collection('signIn').save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
});
