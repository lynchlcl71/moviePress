const express = require('express');
const router = express.Router();

router
.use(require('./movies.js'));
// .get('/', (req, res) => {
//   res.send('Hello World');
// });

module.exports = router;