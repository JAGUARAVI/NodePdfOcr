require('dotenv').config();
const recognise = require('../');

recognise(process.argv[2]).then(console.log);