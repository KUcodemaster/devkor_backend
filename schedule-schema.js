const mongoose = require('mongoose');
const { Schema } = mongoose;
const autoIdSetter = require('./auto-id-setter');

const scheduleSchema = new Schema({
  content: { type: String, required: true},
  startDate: { type: Date, required: true},
  dueDate: { type: Date, required: true}
});

autoIdSetter(scheduleSchema, mongoose, "schedule", "id")
module.exports = mongoose.model('schedule', scheduleSchema);