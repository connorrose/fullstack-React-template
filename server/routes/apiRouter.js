const router = require('express').Router();
const exampleController = require('../controllers/exampleController');

router.get('/', exampleController.middleware, (req, res) => {
  res.status(200).json({ success: true });
});

module.exports = router;
