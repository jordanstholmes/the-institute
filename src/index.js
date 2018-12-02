const express = require('express');
const db = require('../database/index.js');

const app = express();
const port = process.env.PORT || 7000;
const url = process.env.URL || 'localhost';

app.get('/:videoId', (req, res) => {
  res.send(`You requested video ${req.params.videoId}`);
});

app.listen(port, () => console.log(`Server on ${url} using port ${port}`));
