const http = require("http");
const dbconn = require("./dbconnect");
const httpServer = http.createServer(function (req, res) {
  if (req.url === "/listStudents") {
    if (dbconn == "connected");
    {
      console.log("Connected");
      q = "SELECT * FROM student limit 1";
      dbconn.connection.query(q, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });
    }
    res.end("List of students");
  } else if (req.url === "/updateStudent") {
    if (dbconn == "connected");
    {
      console.log("Connected");
      q = "UPDATE name FROM student where ID=50";
      dbconn.connection.query(q, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });
    }
    res.end("updating student");
  } else if (req.url === "/deleteStudent") {
    if (dbconn == "connected");
    {
      console.log("Connected");
      q = "DELETE * FROM student where ID=50";
      dbconn.connection.query(q, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });
    }
    res.end(" Deleting Student");
  } else {
    res.end("Improper request");
  }
});
