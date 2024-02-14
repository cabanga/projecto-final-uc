import 'dotenv/config'
const env = process.env

import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import apiRoutes from './src/routes/index.js'

var app = express();
var port = process.env.port || env.APP_PORT

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', apiRoutes)





app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});