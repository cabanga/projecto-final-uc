import 'dotenv/config'
const env = process.env

import express from 'express'
import bodyParser from 'body-parser'
import apiRoutes from './src/routes/index.js'

var app = express();
var port = process.env.port || env.APP_PORT

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', apiRoutes)






/*

var _positionsController = require('./src/app/controllers/positionsController')
app.get('/positions', _positionsController.index)
app.get('/positions/:id', _positionsController.show)
app.post('/positions', _positionsController.create)
app.patch('/positions/:id', _positionsController.update)

*/

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});