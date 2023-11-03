const Mark = require('../Models/Marks');

const getMarkById = async (req, res) => {
  try {
    const { id } = req.params;
    const mark = await Mark.findById(id);

    if (!mark) {
      return res.status(404).json({ error: 'Mark not found' });
    }

    res.status(200).json(mark);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the mark' });
  }
};

// Controller functions
const createMark = async (req, res) => {
  try {
    const newMark = new Mark(req.body);
    const savedMark = await newMark.save();
    res.status(201).json(savedMark);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating a mark' });
  }
};

const getAllMarks = async (req, res) => {
  try {
    const marks = await Mark.find();
    res.status(200).json(marks);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching marks' });
  }
};

const updateMark = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedMark = await Mark.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedMark) {
      return res.status(404).json({ error: 'Mark not found' });
    }
    res.status(200).json(updatedMark);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating a mark' });
  }
};

const deleteMark = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMark = await Mark.findByIdAndDelete(id);
    if (!deletedMark) {
      return res.status(404).json({ error: 'Mark not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting a mark' });
  }
};

module.exports = {
  createMark,
  getAllMarks,
  updateMark,
  deleteMark,
  getMarkById
  // Export other controller functions as needed
};
