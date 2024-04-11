const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://noman123:noman123@cluster0.rm8zwje.mongodb.net/practice"
  )
  .then(() => {
    console.log("DB Connected ...");
  })
  .catch((err) => console.log(err));

const usereSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: String,
  },
});

const userModel = mongoose.model("User", usereSchema);
module.exports = userModel;
