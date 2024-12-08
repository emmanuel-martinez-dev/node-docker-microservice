const router = require("express").Router();

router.route("/").get((req, res) => {
  const message = `Hello ${req.query.name || "World"} from get request`;
  res.json(message);
});

router.route("/:lang").get((req, res) => {
  switch (req.params.lang) {
    case "es":
      msg = "Hola Mundo!";
      break;
    case "en":
      msg = "Hello World!";
      break;
    case "fr":
      msg = "Bonjour le monde!";
      break;
    default:
      msg = "Hallo Welt!";
  }
  res.json({ msg });
});

router.route("/").post((req, res) => {
  const message = `Hello ${req.body.name || "World"} from post request`;
  res.json({ message });
});

module.exports = router;
