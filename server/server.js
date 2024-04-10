const express = require("express");
const app = express();

app.use((req, res, next) => {
  next();
});
app.get("/", (req, res) => {
  res.json(`Hello youu world !!! ${req.params.username}`);
});

//default error handler

app.listen(3000, () => {
  console.log("server is Runnig on ... 3000");
});
