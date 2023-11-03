const Teacher = require('../Models/Teacher');

// Controller functions
const getTeacherById = async (req, res) => {
  try {
    const { id } = req.params;
    const teacher = await Teacher.findById(id);

    if (!teacher) {
      return res.status(404).json({ error: 'Teacher not found' });
    }

    res.status(200).json(teacher);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the teacher' });
  }
};

const createTeacher = async (req, res) => {
  try {
    const newTeacher = new Teacher(req.body);
    const savedTeacher = await newTeacher.save();
    res.status(201).json(savedTeacher);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating a teacher' });
  }
};

const getAllTeachers = async (req, res) => {
  console.log('fjwefhswhfsd');
  try {
    const teachers = await Teacher.find();

    // console.log(teachers);

    res.status(200).json(teachers);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching teachers' });
  }
};

const updateTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTeacher = await Teacher.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedTeacher) {
      return res.status(404).json({ error: 'Teacher not found' });
    }
    res.status(200).json(updatedTeacher);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating a teacher' });
  }
};

const deleteTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTeacher = await Teacher.findByIdAndDelete(id);
    if (!deletedTeacher) {
      return res.status(404).json({ error: 'Teacher not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting a teacher' });
  }
};

module.exports = {
  createTeacher,
  getAllTeachers,
  updateTeacher,
  deleteTeacher,
  getTeacherById
  // Export other controller functions as needed
};
