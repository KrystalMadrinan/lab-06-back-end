'use strict';

const express = require('express');
const app = express();
require('dotenv').config();

const cors = require('cors');
app.use(cors());

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
})
