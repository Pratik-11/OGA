// const express = require('express');
// const cors = require("cors");
// const bodyParser = require('body-parser');
// const sql = require("mssql");
// const server = express();
// server.use(bodyParser.json());

// // Establish the database connection
// const dbConfig = {
//   user: "your-username",
//   password: "your-password",
//   server: "your-server", // Replace with your SQL Server instance name
//   database: "your-database", // Replace with your database name
//   options: {
//     trustServerCertificate: true // Required if using a self-signed certificate
//   }
// };

// sql.connect(dbConfig).then(pool => {
//   console.log("Successfully Connected to DB");
// }).catch(err => {
//   console.log("Error Connecting to DB:", err);
// });

// // Establish the Port
// server.listen(8085, function (error) {
//   if (error) {
//     console.log("Error starting the server:", error);
//   } else {
//     console.log("Server started successfully on port 8085");
//   }
// });

// server.use(cors({ origin: 'http://localhost:4200' }));

// // View the Records
// server.get("/api/autoform1", (req, res) => {
//   const query = "SELECT * FROM autoform1";
//   sql.query(query).then(result => {
//     res.send(result.recordset);
//   }).catch(err => {
//     console.log("Error executing query:", err);
//     res.status(500).send("Error executing query");
//   });
// });

server.use(cors({ origin: 'http://localhost:4200' }));



//view the Records
server.get("/api/autoform1", (req, res) => {
    var sql = "SELECT * FROM autoform1";
    db.query(sql, function (error, result) {
      if (error) {
        console.log("Error Connecting to DB");
      } else {
        res.send(result);
      }
    });
  });  

  

  server.get("/api/autoform1", cors({
    origin: 'http://localhost:4200/', // Replace '*' with the actual frontend origin
    methods: 'GET, POST, PUT, DELETE', // Specify the allowed HTTP methods
    // allowedHeaders: 'Content-Type, Authorization', // Specify the allowed headers
  }), (req, res) => {
    var sql = "SELECT * FROM autoform1";
    db.query(sql, function (error, result) {
      if (error) {
        console.log("Error Connecting to DB");
      } else {
        res.send({ status: true, data: result });
      }
    });
  });

  // //Create the Records
// server.post("/api/autoform1/add", (req, res) => {
//     let details = {
//         LOB: req.body.LOB,
//         Macroname: req.body.Macroname,
//         frequency: req.body.frequency,
//         month: req.body.month
//     };
//     let sql = "INSERT INTO autoform1 SET ?";
//     db.query(sql, details, (error) => {
//       if (error) {
//         res.send({ status: false, message: "Entry created Failed" });
//       } else {
//         res.send({ status: true, message: "Entry created successfully" });
//       }
//     });
//   });




// //Search the Records
// server.get("/api/autoform1/:id", (req, res) => {
//     var autoform1id = req.params.id;
//     var sql = "SELECT * FROM student WHERE id=" + autoform1id;
//     db.query(sql, function (error, result) {
//       if (error) {
//         console.log("Error Connecting to DB");
//       } else {
//         res.send({ status: true, data: result });
//       }
//     });
//   });


// //Update the Records
// server.put("/api/autoform1/update/:id", (req, res) => {
//     let sql =
//       "UPDATE student SET stname='" +
//       req.body.stname +
//       "', course='" +
//       req.body.course +
//       "',fee='" +
//       req.body.fee +
//       "'  WHERE id=" +
//       req.params.id;
  
//     let a = db.query(sql, (error, result) => {
//       if (error) {
//         res.send({ status: false, message: "Entry Updated Failed" });
//       } else {
//         res.send({ status: true, message: "Entry Updated successfully" });
//       }
//     });
//   });


// //Delete the Records
// server.delete("/api/autoform1/delete/:id", (req, res) => {
//     let sql = "DELETE FROM student WHERE id=" + req.params.id + "";
//     let query = db.query(sql, (error) => {
//       if (error) {
//         res.send({ status: false, message: "Entry Deleted Failed" });
//       } else {
//         res.send({ status: true, message: "Entry Deleted successfully" });
//       }
//     });
//   });

const express = require('express')
const cors = require("cors");
const bodyParser = require('body-parser')
const mysql = require("mysql");
const server = express();
server.use(bodyParser.json());

//Establish the database connection

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "testdb1",
});

db.connect(function (error) {
    if (error) {
      console.log(error);
    } else {
      console.log("successfully Connected to DB");
    }
  });


  //Establish the Port
  server.listen(8085,function check(error) {
    if (error) 
    {
    console.log("Error....dddd!!!!");
    }
    else 
    {
        console.log("Started....!!!! 8085");
    }
});
