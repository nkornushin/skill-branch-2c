import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

import canonize from './canonize'

app.get('/', (req, res) => {
  let usernameQuery = req.query.username;
  let username = canonize(usernameQuery);

  if(username != '') {
    res.send('@'+username);
  } else {
    res.send('Invalid username');
  }

});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});