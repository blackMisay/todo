const express = require('express');

const api = express();
api.use(express.static(__dirname + '/public'));

api.listen(3000, () => {
    console.log('API is up and running!');
});

api.post('/add', (res, req) => {
    console.log('Post request received');
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

