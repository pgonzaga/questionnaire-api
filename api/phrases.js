const express = require('express');
const router = express.Router();

router.get('/:text', function (req, res) {
  res.send({ text: req.params.text });
});

module.exports = router;
