const connectToMongo = require("./db");
const express = require('express');
const { register } = require('./routes/payment');
const cors = require('cors');
const path = require('path');
connectToMongo();
const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('welcome');
})
app.post('/register', register);

app.use(express.static(path.join(__dirname, '../build')))
app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, '../build/index.html'))
});
app.listen(port, () => {
  console.log(`yoga app backend listening on port ${port}`)
})