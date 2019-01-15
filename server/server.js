const express = require('express')
const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');
const next = require('next')

const wrap = require('./middlewares/wrap');
const api = require('./api');

const dev = process.env.NODE_ENV || 'development'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

const port = process.env.PORT || 3000;

nextApp.prepare().then(() => {
    const app = express()
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(morgan('dev'));
    app.use(helmet());
    app.use(cors())
    app.use('/api/v1', api)
    app.get('*', (req, res) => {
        return handle(req, res)
    })
    app.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})
.catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
})
