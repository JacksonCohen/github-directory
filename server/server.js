const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 11111;

app.get('/user/signin', (req, res) => {
  const { query } = req;
  const { code } = query;
  console.log(code, 'code');

  if (!code) {
    return res.send({
      success: false,
      message: 'Error: no code'
    });
  }
});

app.listen(port, error => {
  error
    ? console.error(`Error starting server: ${error}`)
    : console.log(`Server started on port ${port}`);
});
