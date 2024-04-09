//handles different endpoints
//contains the business logic of the web application, or the part that deals with handling how the application's data is read, processed, stored, etc


import Student from './gcpelleteroexer6.js';

const saveStudent = async (req, res) => {
    try {
      const student = new Student(req.body);
      await student.save();
      res.json({ inserted: true });
    } catch (err) {
      res.status(500).json({ inserted: false });
    }
  };
  
  const updateStudent = async (req, res) => {
    try {
      await Student.updateOne({ fname: "Mary Jane" }, { lname: "Parker" });
      res.json({ updated: true });
    } catch (err) {
      res.status(500).json({ updated: false });
    }
  };
  
  const removeUser = async (req, res) => {
    try {
      await Student.deleteOne({ stdnum: req.body.stdnum });
      res.json({ deleted: true });
    } catch (err) {
      res.status(500).json({ deleted: false });
    }
  };
  
  const removeAllUsers = async (req, res) => {
    try {
      const result = await Student.deleteMany();
      res.json({ deleted: result.deletedCount > 0 });
    } catch (err) {
      res.status(500).json({ deleted: false });
    }
  };
  
  const getUser = async (req, res) => {
    try {
      const student = await Student.find({ stdnum: req.query.stdnum });
      res.json(student);
    } catch (err) {
      res.status(500).json([]);
    }
  };
  
  const getMembers = async (req, res) => {
    try {
      const students = await Student.find();
      res.json(students);
    } catch (err) {
      res.status(500).json([]);
    }
  };
  
  module.exports = {
    saveStudent,
    updateStudent,
    removeUser,
    removeAllUsers,
    getUser,
    getMembers
  };
  