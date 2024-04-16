const router = require("express").Router();
const { getAll } = require("../controllers/checkListController");

router.get("/", getAll);

module.exports = router;
