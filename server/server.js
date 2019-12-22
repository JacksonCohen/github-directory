const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 11111;
const client_secret = require('../src/config.js');
const client_id = '6f7c14d6f3a82966cbb6';

app.use(cors());
app.use(bodyParser.json());

app.post('/getAuthToken', (req, res) => {
  const { code } = req.body;
  axios
    .post(`https://github.com/login/oauth/access_token`, {
      code,
      client_id,
      client_secret
    })
    .then(response => {
      res.json(response.data);
    });
});

app.listen(port, error => {
  error
    ? console.error(`Error starting server: ${error}`)
    : console.log(`Server started on port ${port}`);
});
