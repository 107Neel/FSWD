const express = require("express");
const app = express();
const mongoose = require("mongoose");
const StudentDb = require("./model/StudentDB");
const StudentDB = require("./model/StudentDB");

const dbConnect = mongoose.connect("mongodb://localhost:27017/StudentDB");
dbConnect.then((d) => {
  console.log("successfully connected to db");
});
app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).send("hello express");
});

app.post("/submitStudent", (req, res) => {
  let newStudent = new StudentDB({
    sid: req.body.sid,
    name: req.body.name,
    address: req.body.address,
    mobileno: req.body.mobileno,
  });
  newStudent
    .save()
    .then((student) => {
      res.status(200).send(student);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
});

app.get("/studentList", (req, res) => {
  StudentDB.find({}, (err, student) => {
    if (err) {
      res.status(500).send(err);
      console.log(err);
    }

    res.status(200).send(student);
  });
});

app.get("/studentList/:sid", (req, res) => {
  StudentDB.findOne({ sid: req.params.sid }, (err, student) => {
    if (err) {
      res.status(400).send(err);
      console.log(err);
    }

    res.status(200).send(student);
  });
});

app.delete("/deleteStudentList/:sid", (req, res) => {
  StudentDb.deleteOne({ sid: req.params.sid }, (err, student) => {
    if (err) {
      console.log(err);
    }
    res.status(200).send(student);
  });
});

app.put("/updateStudent/:sid", (req, res) => {
  let student = {};

  if (req.body.sid) student.sid = req.body.sid;
  if (req.body.name) student.name = req.body.name;
  if (req.body.address) student.address = req.body.address;
  if (req.body.mobileno) student.mobileno = req.body.mobileno;

  StudentDb.updateOne({ sid: req.params.sid }, student)
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => {
      req.status(400).send(err);
    });
});
app.listen(1200, () => {
  console.log("sever listening on port:1200");
});
