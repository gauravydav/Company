const express = require('express');
const app = express();
const port = 9000;

// Import the database connection
const db = require('./db');

// Import the student router
const studentRouter = require('./routes/studentRoutes');
const teacherRouter = require('./routes/teacherRoutes');

// Import and use the cors middleware
const cors = require('cors');
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// Attach the student routes
app.use('/students', studentRouter);
app.use('/teachers', teacherRouter); // Make sure the route path is correct

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
