const express = require("express");
const userModel = require("./models/user");
const indexRouter = require("./routes/index");
const app = express();

app.use("/", indexRouter);
app.use("/users", userModel);

app.listen(3000, () => {
  console.log("server is Runnig on ... 3000");
});
