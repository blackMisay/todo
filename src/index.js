const bodyParser = require("body-parser");
const express = require('express');
const mysql = require('mysql2');

// connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todo'
});

// red flag (connection)
try {
    connection.connect();
} catch (e) {
    console.log('Ops. Connection to MySQL failed.');
    console.log(e);
}

const api = express();
api.use(express.static(__dirname + '/public'));
api.use(bodyParser.json());

api.listen(3000, () => {
    console.log('API is up and running!');
});

api.post('/add', (req, res) => {
    console.log(req.body);

    connection.query('INSERT INTO tasks (description) VALUES (?)',
    [req.body.item], (error, results) => {
        if (error) return res.json({ error: error });

        connection.query('SELECT LAST_INSERT_ID() FROM tasks', (error, results) => {
            if (error) return res.json({ error: error });

            console.log(results);
        });
    });
});

// api.get('/', (req, res) => {
//     console.log(req);
//     res.send('Hello World!');
// });

// Middleware sample
// api.use((req, res, next) => {
//     console.log('Hello');
//     next();
// });

