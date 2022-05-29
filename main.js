const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');



// DB 부분
const mongoURL = "mongodb://localhost:27017/mydb";
mongoose.connect(mongoURL, 
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
const db = mongoose.connection;
db.once("open", (_) => {
  console.log("Database connected:", mongoURL);
});
db.on("error", (err) => {
  console.error("connection error:", err);
});

// API 부분
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(require("./user-api"));
app.use(require("./schedule-api"));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/html/index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
