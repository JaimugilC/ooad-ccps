const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "ccpsdb",
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

app.get("/api/login", (req, res) => {
  const sqlSelect = "SELECT * FROM user";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.get("/api/getcc", (req, res) => {
  const sqlSelect = "SELECT * FROM creditcard";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.get("/api/applications", (req, res) => {
  const sqlSelect = "SELECT * FROM application";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.get("/api/viewbatch", (req, res) => {
  const sqlSelect = "SELECT * FROM batch";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.get("/api/balance", (req, res) => {
  const sqlBalance = "SELECT * FROM merchant";
  db.query(sqlBalance, (err, result) => {
    res.send(result);
  });
});

app.post("/api/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const type = "user";
  const Accstatus = "processing";
  const number = req.body.number;

  const sqlInsert =
    "INSERT INTO user (username, email, password, type, Accstatus, number) VALUES(?,?,?,?,?,?)";
  db.query(
    sqlInsert,
    [username, email, password, type, Accstatus, number],
    (err, result) => {
      console.log(err);
      console.log(result);
    }
  );
});

app.post("/api/apply", (req, res) => {
  const username = req.body.username;
  const address = req.body.address;
  const pan = req.body.pan;
  const income = req.body.income;
  const dob = req.body.dob;
  const phone = req.body.phone;

  const sqlInsert =
    "INSERT INTO application (username, address, pan, income, dob, phone) VALUES(?,?,?,?,?,?)";
  db.query(
    sqlInsert,
    [username, address, pan, income, dob, phone],
    (err, result) => {
      console.log(err);
      console.log(result);
    }
  );
});

app.post("/api/sendbatch", (req, res) => {
  const username = req.body.username;
  const cardnumber = req.body.cardnumber;
  const totalAmount = req.body.totalAmount;

  const sqlInsert =
    "INSERT INTO batch (Cardholder, Accno, TotalAmount) VALUES(?,?,?)";
  db.query(sqlInsert, [username, cardnumber, totalAmount], (err, result) => {
    console.log(err);
    console.log(result);
  });
});

app.post("/api/issuecard", (req, res) => {
  const username = req.body.username;
  const cardnumber = req.body.cardnumber;
  const expdate = req.body.expdate;
  const cvv = req.body.cvv;
  const limit = req.body.limit;

  const sqlInsert =
    "INSERT INTO creditcard (username, cardnumber, expdate, cvv, maxlimit) VALUES(?,?,?,?,?)";
  db.query(
    sqlInsert,
    [username, cardnumber, expdate, cvv, limit],
    (err, result) => {
      console.log(err);
      console.log(result);
    }
  );

  const sqlDelete = "DELETE FROM application WHERE username=?";
  db.query(sqlDelete, [username], (err, result) => {
    console.log(err);
    console.log(result);
  });

  const sqlUpdate = "UPDATE user SET Accstatus = 'issued' WHERE username=?";
  db.query(sqlUpdate, [username], (err, result) => {
    console.log(err);
    console.log(result);
  });
});

app.post("/api/transferfund", (req, res) => {
  const totalAmount = req.body.totalAmount;

  const sqlUpdate =
    "UPDATE merchant SET bankbalance = ? WHERE username='merchant'";
  db.query(sqlUpdate, [totalAmount], (err, result) => {
    console.log(err);
    console.log(result);
  });

  const sqlTruncate = "TRUNCATE TABLE batch";
  db.query(sqlTruncate, (err, result) => {
    console.log(err);
    console.log(result);
  });
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
