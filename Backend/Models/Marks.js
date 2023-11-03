const mongoose = require('mongoose');

const markSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' },
  subject: String,
  score: Number,
  // Add more fields as needed (e.g., exam date, comments, etc.).
});

const Mark = mongoose.model('Mark', markSchema);

// Export the model for use in other parts of your application
module.exports = Mark;
