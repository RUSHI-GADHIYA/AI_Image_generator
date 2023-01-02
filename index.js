const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();
const path = require("path")
// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use('/openai', require('./routes/openaiRoutes'))

// set static folder
app.use(express.static(path.join(__dirname, 'public')))


app.listen(port, () => { console.log("server started on", port) })