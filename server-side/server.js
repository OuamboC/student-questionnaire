const express = require('express');
const morgan = require('morgan');
const bodyParser = require ('body-parser');
const fs = require('fs')


const cors = require('cors');

const app = express();
app.use(cors());

// Server port
const HTTP_PORT = 3000;

// Start server
app.listen(HTTP_PORT, () => {
    console.log('Server running on port: ' + HTTP_PORT);
})

//Logging
app.use(morgan('tiny'));

//Body parser
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
    const data = req.body;
    //Store data ( for simplicity , storing in a JSON files; for production , I will use a Db)
    fs.readFile('data.json', (err, fileData) => {
        const json = err ? [] : JSON.parse(fileData);
        json.push(data);
        fs.writeFile('data.json', JSON.stringify(json, null, 2), (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Error saving data');
            }
            res.send('Data received and saved');
        });
        
    });
});

