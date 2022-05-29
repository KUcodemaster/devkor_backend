const mongoose = require('mongoose');
const { Schema } = mongoose;
const autoIdSetter = require('./auto-id-setter');

const userSchema = new Schema({
  name: { type: String, required: true, unique: true },
  birth: { type: Date },
  phone_number: { type: String }
});

autoIdSetter(userSchema, mongoose, "user", "id");
module.exports = mongoose.model('user', userSchema);