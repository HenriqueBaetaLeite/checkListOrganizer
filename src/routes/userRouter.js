const router = require("express").Router();

const  { getAllUsers, getUser } = require('../controllers/userController.js');

router.get('/', getAllUsers);

router.get('/:id', getUser);

module.exports = router;