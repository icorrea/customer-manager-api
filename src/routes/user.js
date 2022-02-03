const router = require("express").Router();
const { User } = require("../models/user");

// Get All
router.get("/users", (req, res, next) => {
  User.find()
    .then((users) => res.send(users))
    .catch((err) => res.send(err));
});

// Create
router.post("/users", (req, res, next) => {
  const user = new User(req.body);
  user
    .save()
    .then(() => res.send({ status: 200, error: [] }))
    .catch((err)=>res.send({ status: 500, error: err }));
});

module.exports.UserRouter = router;
