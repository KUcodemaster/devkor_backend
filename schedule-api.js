const schedule = require('./schedule-schema');
const express = require('express');
const router = express.Router();

router.get('/schedules', async (req, res) => {
  res.send(await schedule.find({}));
});

router.post('/schedule', (req, res) => {
  const { content, startDate, dueDate } = req.body;
  const scheduleData = new schedule({ content: content, startDate: startDate, dueDate: dueDate})
  scheduleData.save((err) => {
    if (err) return console.log(err)
    res.status(200).end('처리 완료')
  })
});

module.exports = router;