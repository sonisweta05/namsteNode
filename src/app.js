const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");
app.use(express.json());
app.post("/signup", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.send("User added Successfully");
  } catch (err) {
    res.status(400).send("Error saving the User" + err.message);
  }
});

app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;
  try {
    const users = await User.findOne({ emailId: userEmail });
    if (!users) {
      res.status(400).send("User not found");
    } else {
      res.send(users);
    }
    // const users = await User.find({ emailId: userEmail });
    // if (users.length === 0) {
    //   res.status(400).send("User not found");
    // } else {
    //   res.send(users);
    // }
  } catch {
    res.status(400).send("Something wrong");
  }
});

app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch {
    res.status(400).send("Something wrong");
  }
});
app.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  try {
    const user = await User.findByIdAndDelete(userId);
    res.send("User deleted Successfully");
  } catch {
    res.status(400).send("Something wrong");
  }
});
app.patch("/user", async (req, res) => {
  const userId = req.body.userId;
  const data = req.body;
  try {
    const user = await User.findByIdAndUpdate({ _id: userId }, data,{
      runValidators: true,

    })
    res.send("User updated Successfully");
  } catch (err) {
    res.status(400).send("Update Fialed:" + err.message);
  }
});
connectDB()
  .then(() => {
    console.log("Connection to mongoose is successfully done");
    app.listen(3000, () => {
      console.log("sucessfully");
    });
  })
  .catch((err) => {
    console.log("Connection to mongoose cannnot be done");
  });
