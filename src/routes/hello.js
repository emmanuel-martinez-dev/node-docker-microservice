const router = require("express").Router();

router.route("/").get((req, res) => {
  const message = `Hello ${req.query.name || "World"} from get request`;
  res.json(message);
});

module.exports = router;
