const express = require('express');
const router = express.Router();
const id = 'paUZLn1nDViasZB'
const url = "https://api.careeronestop.org/v1/jobsearch/"+id+"/0/United%20States/25/0/0/0/10/10?source=NLx&showFilters=false";
const dotenv = require('dotenv').config();
const cors = require('cors');

// middleware
const jobs = require('../middleware/getJobs');

// ROUTE
router.get('/', cors(), jobs.getJobs);

module.exports = router;
