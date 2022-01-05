const express = require('express');
const router = express.Router();
const id = 'paUZLn1nDViasZB'
const url = "https://api.careeronestop.org/v1/jobsearch/"+id+"/0/United%20States/25/0/0/0/10/10?source=NLx&showFilters=false";

let jobs;
// FETCH DATA
const axios = require('axios');

const config = {
  method: 'get',
  url: 'https://api.careeronestop.org/v1/jobsearch/paUZLn1nDViasZB/web-developer/95688/25/0/0/0/100/30?source=NLx&showFilters=false',
  headers: { 
    'Authorization': 'Bearer lxx3xBb9QkjgwWcMG7+q48Ll7B9qWAAIAcP+4IoNWv1sJr2vqNktORT+kUfXhSqKphk0aW3sxHqIUwFTWGiBcQ=='
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
