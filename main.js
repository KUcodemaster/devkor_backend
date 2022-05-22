const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


// DB 부분
const { Schema } = mongoose;

const userSchema = new Schema({
  id: Number,
  name: String,
  date: Date
});

async function main() {
  await mongoose.connect('mongodb://localhost:3000/test');
  const User = mongoose.model('User', userSchema);
  const user1 = new User({ id:0, name:'hello', date:Date()});
  console.log("DB has been connected!!!");
}

main();

// API 부분
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/html/index.html'));
})

app.post('/users', (req, res) => {
  const { name, birth, phone_number } = req.body;
  const id = 1;
  res.send({ id, name, birth, phone_number });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})