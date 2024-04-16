const router = require('express').Router();
const { getAllItems } = require('../controllers/itemController');

router.get('/', getAllItems);

module.exports = router;
