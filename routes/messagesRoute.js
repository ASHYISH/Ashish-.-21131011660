const { register } = require("../controllers/messagesController");
const { auth } = require("../controllers/messagesController");

const router = require("express").Router();

router.post("/register", register);
router.post("/auth", auth);

module.exports = router;
