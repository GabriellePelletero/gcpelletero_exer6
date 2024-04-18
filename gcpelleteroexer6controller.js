//handles different endpoints
//contains the business logic of the web application, or the part that deals with handling how the application's data is read, processed, stored, etc


// import Student from './gcpelleteroexer6.js';


import mongoose from 'mongoose';

await mongoose.connect('mongodb+srv://gcpelletero:UrfvwFOmtgSpkgtN@cluster0.pcsniql.mongodb.net/StudentDatabase') 
console.log("connected to mongodb");

const Student = mongoose.model('studentData', {
    stdnum: Number,
    fname: String,
    lname: String,
    age: Number
  });

const saveStudent = async (req, res) => {
    try {
      const student = new Student(req.body);
      await student.save();
      res.send({ inserted: true });
    } catch (err) {
      res.send({ inserted: false });
    } 
  };
  
  const updateStudent = async (req, res) => {
    

    try {
      await Student.updateOne({ fname: req.body.fname },{$set{ lname: req.body.lname }} );  
      res.send({ updated: true });
    } catch (err) {
      res.send({ updated: false });
    }
  };

  const removeUser = async (req, res) => {
    try {
      await Student.deleteOne({ stdnum: req.body.stdnum });
      res.send({ deleted: true });
    } catch (err) {
      res.send({ deleted: false });
    }
  };
  
  const removeAllUsers = async (req, res) => {
    try {
      const result = await Student.deleteMany();
      return res.send({deletedAll: true});
    } catch (err) {
      console.error("error:", error);
      return res.send("error");
    }
  };
  
  const user = async (req, res) => {
    try {
      const student = await Student.find({ stdnum: req.query.stdnum });
      return res.send(student);
    } catch (err) {
      return res.send([]);
    }
  };
  
  const members = async (req, res) => {
    try {
      const students = await Student.find();
      res.send(students);
    } catch (err) {
      res.status(500).send([]);
    }
  };
  

  export {saveStudent, updateStudent, removeUser,removeAllUsers, user,members}
  