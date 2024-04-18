//handles different endpoints
//contains the business logic of the web application, or the part that deals with handling how the application's data is read, processed, stored, etc

import mongoose from 'mongoose';

await mongoose.connect('mongodb+srv://gcpelletero:UrfvwFOmtgSpkgtN@cluster0.pcsniql.mongodb.net/StudentDatabase') 
console.log("connected to mongodb");

//define model for the collection
const Student = mongoose.model('studentData', {
    stdnum: Number,
    fname: String,
    lname: String,
    age: Number
  });

//function to save new student
const saveStudent = async (req, res) => {
    try {
      const student = new Student(req.body);
      await student.save();
      res.send({ inserted: true });
    } catch (err) {
      res.send({ inserted: false });
    } 
  };
  
//function to update students information
  const updateStudent = async (req, res) => {
    try {
      await Student.updateOne({ fname: req.body.fname },{$set:{ lname: req.body.lname }} );  
      res.send({ updated: true });
    } catch (err) {
      res.send({ updated: false });
    }
  };

//function to remove a user through its student number
  const removeUser = async (req, res) => {
    try {
      await Student.deleteOne({ stdnum: req.body.stdnum });
      return res.send({ deleted: true });
    } catch (err) {
      return res.send({ deleted: false });
    }
  };
  
//function to remove all users
  const removeAllUsers = async (req, res) => {
    try {
      await Student.deleteMany();
      return res.send({deletedAll: true});
    } catch (err) {
      console.error("error:", error);
      return res.send("error");
    }
  };

//function to retrieve a user
  const user = async (req, res) => {
    try {
      const student = await Student.find({ stdnum: req.query.stdnum });
      return res.send(student);
    } catch (err) {
      return res.send([]);
    }
  };

//function to retrieve all members  
  const members = async (req, res) => {
    try {
      const students = await Student.find();
      res.send(students);
    } catch (err) {
      res.status(500).send([]);
    }
  };
  

  export {saveStudent, updateStudent, removeUser,removeAllUsers, user,members}
  