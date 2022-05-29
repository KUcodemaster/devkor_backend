const user = require('./user');
const express = require('express');
const router = express.Router();

router.get('/users', async (req, res) => {
  res.send(await user.find({}));
});

router.post('/user', (req, res) => {
  const { name, birth, phone_number } = req.body;
  console.log(req.body)
  user.updateOne( { name: name}, {birth: birth}, {phone_number: phone_number}, (err, res) => {
    if (err) return console.log(err)
    res.status(200).end('처리 완료')
  })
});

module.exports = router;