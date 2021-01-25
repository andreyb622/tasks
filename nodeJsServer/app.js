const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require('./routers/users.router');

const app = express();

app.use(bodyParser.json());
app.use('/users', usersRouter);

app.listen(3000, () =>{
  console.log(`server on http://localhost:${3000}`);
})