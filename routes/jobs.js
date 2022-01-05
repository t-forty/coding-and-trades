const express = require('express');
const router = express.Router();
const id = 'paUZLn1nDViasZB'
const url = "https://api.careeronestop.org/v1/jobsearch/"+id+"/0/United%20States/25/0/0/0/10/10?source=NLx&showFilters=false";
const dotenv = require('dotenv').config();

const B_TOKEN = process.env.API_KEY;
let jobs;
// FETCH DATA
const axios = require('axios');

const config = {
  method: 'get',
  url: 'https://api.careeronestop.org/v1/jobsearch/paUZLn1nDViasZB/web-developer/95688/25/0/0/0/100/30?source=NLx&showFilters=false',
  headers: { 
    'Authorization': 'Bearer ' + B_TOKEN 
  }
};

axios(config)
.then(function (response) {
  jobs = JSON.stringify(response.data);
})
.catch(function (error) {
  console.log(error);
});

// ROUTE
router.get('/', (req, res) => res.send(jobs));


module.exports = router;
