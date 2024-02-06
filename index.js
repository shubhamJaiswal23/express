const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/api/v1/register', (req, res) => {
  const userName = req.body.name;
  const email = req.body.email;
  res.json({
    success: true
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
