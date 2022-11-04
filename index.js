const express = require("express");
const app = express();
const path = require("path");

const staticPath = path.join(__dirname, "static");
app.use(express.static(staticPath));

app.use('/',require(path.join(__dirname,'routes/router.js')));

const port = process.env.port || 8000;

app.listen(port, (req, res) => {
    console.log("server listening at 8000 port");
});