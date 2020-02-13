const express = require('express');
const config = require('../configs/server.config');
const bodyParser = require('body-parser');
const apiRouter = require('../routes');
const path = "golf-administrator/src/view"
const app = express();

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/view/index.html')
})

app.get('/add', function (req, res) {
  res.sendFile(__dirname + '/view/add.html')
})

app.get('/delete', function (req, res) {
  res.sendFile(__dirname + '/view/delete.html')
})

app.get('/managers', function (req, res) {
  res.sendFile(__dirname + '/view/managers.html')
})

app.get('/admins', function (req, res) {
  res.sendFile(__dirname + '/view/admin.html')
})

// routes
app.use('/api/v1', apiRouter);

exports.start = () => {
    let port = config.port;

    app.listen(port, (err) => {
        if (err) {
            console.log(`Error:${err}`);
            process.exit(-1);
        }
        console.log(`app is running on port ${port}`);
    });

}
