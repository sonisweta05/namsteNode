const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  res.send({ firstName: "Sweta", lastName: "Soni" });
});
app.post("/user", (req, res) => {
  res.send("Data Successfully saved to the Server");
});
app.delete("/user", (req, res) => {
  res.send("Data Successfully deleted");
});
app.use("/test", (req, res) => {
  res.send("1234 from test234");
});

app.listen(3000, () => {
  console.log("sucessfully");
});
