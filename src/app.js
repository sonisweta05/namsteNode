const express = require("express");
const app = express();
const { adminAuth, userAuth } = require("./middleware/auth");

app.use("/admin", adminAuth);

app.get("/user", userAuth, (req, res, next) => {
  res.send("Response 1");
});

app.get("/admin/getAllData", (req, res, next) => {
  res.send("All data sent");
});

app.get("/admin/deleteUser", (req, res, next) => {
  res.send("deleted a User successfully");
});

app.listen(3000, () => {
  console.log("sucessfully");
});
