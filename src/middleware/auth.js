const adminAuth = (req, res, next) => {
  console.log("admin auth is getting checked!!!");
  const token = "xyz";
  const isAdminAuthorised = token === "xyz";
  if (!isAdminAuthorised) {
    res.status(401).send("Unauthorised request");
  } else {
    next();
  }
};
const userAuth = (req, res, next) => {
    console.log("user auth is getting checked!!!");
    const token = "xyz";
    const isAdminAuthorised = token === "xyz";
    if (!isAdminAuthorised) {
      res.status(401).send("Unauthorised request");
    } else {
      next();
    }
  };
module.exports = {adminAuth, userAuth};