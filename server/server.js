const express = require('express')
const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const next = require('next')

const wrap = require('./middlewares/wrap');
const api = require('./api');

const dev = process.env.NODE_ENV || 'development'
const app = next({ dev })
const server = express()
const handle = app.getRequestHandler()

const port = process.env.PORT || 3000;

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(morgan('dev'));
server.use(helmet());

app.prepare()
.then(() => {
  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
