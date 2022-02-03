const router = require("express").Router();
const { User } = require("../models/user");
const Bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/auth", async (req, res, next) => {
  let user = await User.findOne({ username: req.body.username })
    .select("+password")
    .exec();
  let userModel = await User.findOne({ username: req.body.username });
  const userSalt = Bcrypt.getSalt(user.password);
  let $password = Bcrypt.hashSync(req.body.password, userSalt);
  if (!user) {
    throw new Error("Usuario ou senha invalido");
  }
  if ($password !== user.password) {
    throw new Error("Usuario ou senha invalido");
  }

  const token = jwt.sign({ userModel }, process.env.SECRET, {
    expiresIn: 1800,
  });
  res.send({ auth: true, token: token });
});

module.exports.AuthRouter = router;
