const mongoose = require('mongoose');

mongoose.connect("");

const studentSchema = mongoose.Schema({
  name:String,
  email:String,
  subject:String,
  mssg:String

});
const info =mongoose.model('todos',studentSchema);

module.exports = {
   info
}