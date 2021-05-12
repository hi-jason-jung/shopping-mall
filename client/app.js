const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.set("port", port);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
  res.render("./index.html");
});

app.listen(port, () => console.log("Listening on", port));

module.exports = app;