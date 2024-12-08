const express = require("express");
const app = express();

app.get("/getUserData", (req, res,) => {
  throw new Error("ggggggggggggg");
  res.send("User data sent");
});

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("Something went wrong");
  }
});
app.listen(3000, () => {
  console.log("sucessfully");
});
