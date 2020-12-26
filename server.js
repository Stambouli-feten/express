const express = require("express");
const app = express();
const path = require("path");
const myLogger = require("./mylogger");
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "public")));
app.use(myLogger);

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  } else {
    console.log("server is running on http://localhost:5000 ");
  }
});
