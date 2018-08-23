const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  res.send({ text: req.query.text });
});

module.exports = router;
