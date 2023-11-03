const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  name: String,
  subject: String,
  // Add more fields as needed (e.g., contact information, hire date, etc.).
});

const Teacher = mongoose.model('Teacher', teacherSchema);

// Export the model for use in other parts of your application
module.exports = Teacher;
