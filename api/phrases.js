const express = require('express');
const cors = require('cors');
const router = express.Router();

router.get('/', cors(), (req, res) => {
  res.send({ text: req.query.text });
});

module.exports = router;
