const path = require("path");
const express = require('express');
const morgan = require('morgan');
const cors = require("cors")
const app = express();
const port = process.env.PORT || 3001;

app.use(cors())
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'data')))

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`)
})
