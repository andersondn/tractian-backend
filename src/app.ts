require('dotenv').config()
import db from './database/db';
import express from 'express';
import routes from './routes/routes';
import cors from 'cors'
import https from 'https'
import fs from 'fs'
// import delay from 'express-delay';

db()

const app = express()
// app.use(delay(1000));
app.use(cors())
app.use(express.json({limit: '5mb'}));
app.use(routes)
app.use(express.static('public'))


const PORT = process.env.PORT  || 4000

https.createServer({
  key: fs.readFileSync('ssl/server.key'),
  cert: fs.readFileSync('ssl/server.cert')
}, app)
.listen(PORT, function () {
  console.log('Server runnin on port' + PORT)
})