const express = require('express');
const app = express();
const apiRouter = require('./routes/apiRouter');
const bodyParser = require('body-parser');
const mongoDB = require('./database/dbOperations');
const cors = require('cors');

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// configure body-parser
app.use(jsonParser);
app.use(urlencodedParser);

// configure cors
app.use(cors());

const hostname = '127.0.0.1';
const port = 3000;

app.get('/',(request,response) => {
    response.send(`<h2>Welcome to Employee Portal REST API</h2>
        <p>Please use /api/employees path to access</p>`);
});


// configure the apiRouter
app.use('/api',apiRouter);


// Create database connection and start the server
mongoDB.createDatabaseConnection(() => {
    app.listen(port,hostname,() => {
        console.log(`Express Server is Started at http://${hostname}:${port}`);
    });
});

