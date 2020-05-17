
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
// const events = require('./events');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Maggio_2020',
  database : 'sys'
});
connection.connect();
const port = process.env.PORT || 3000;
const app = express()
  .use(cors())
  .use(bodyParser.json())
//   .use(events(connection));

// Get Appointment by ID request
app.get('/getMaterials', function(req, res, next) {
  connection.query("SELECT * FROM anagrafica_materiale", function (err, result, fields) {
    if (err || !result) {
      res.send({
        code: 404,
        message: `Angrafica materiale non trovata`
      })
    } else {
      res.send(result)
    }
    console.log(result);
  });
})

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});