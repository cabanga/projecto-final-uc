require('dotenv/config')
const env = process.env

var express = require("express")
const bodyParser = require('body-parser')

var app = express();
var port = process.env.port || env.APP_PORT

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var _positionsController = require('./src/app/controllers/positionsController')
app.get('/positions', _positionsController.index)
app.post('/positions', _positionsController.create)
app.get('/positions/:id', _positionsController.show)
app.patch('/positions/:id', _positionsController.update)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});