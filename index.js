const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());
app.use(express.json());

// HACKATON

app.get('/OMG/:artiste', (req, res) => {
  try {
    const path = `http://api.deezer.com/artist/${req.params.artiste}`;
    axios
      .get(path)
      .then(({ data }) => {
        const responce = data;
        res.status(201).send(responce);
      })
      .catch(function (error) {
        console.error(error);
      });
  } catch (err) {
    console.warn('Beware, we had an error on GET /code !', err);
    res.status(500).send('Achtung ! I iz broken ! é_è');
  }
});

app.get('/OMG/music/:id', (req, res) => {
  try {
    const path = `http://api.deezer.com/artist/${req.params.id}/top?limit=50`;

    axios
      .get(path)
      .then(({ data }) => {
        const responce = data;
        res.status(201).send(responce);
        console.log(path);
      })
      .catch(function (error) {
        console.error(error);
      });
  } catch (err) {
    console.warn('Beware, we had an error on GET /code !', err);
    res.status(500).send('Achtung ! I iz broken ! é_è');
  }
});

app.listen(5051, () => {
  console.log('API now available on http://localhost:5051 !');
});
