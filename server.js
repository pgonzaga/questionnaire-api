const express = require('express');
const server = express();
const PORT = process.env.PORT || 3000;
const phrasesApi = require('./api/phrases');

server.use('/phrases', phrasesApi);
// eslint-disable-next-line no-console
server.listen(PORT, () => console.log(`Questionnaire app listening on port ${PORT}!`));

module.exports = server;
