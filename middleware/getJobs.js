const axios = require('axios');

// .env variables
const dotenv = require('dotenv').config();
const B_TOKEN = process.env.API_KEY;

// response variable
let jobs;

//Axios config
const config = {
    method: 'get',
    url: 'https://api.careeronestop.org/v1/jobsearch/paUZLn1nDViasZB/web-developer/95688/25/0/0/0/100/30?source=NLx&showFilters=false',
    headers: { 
      'Authorization': 'Bearer ' + B_TOKEN 
    }
};

exports.getJobs = (req, res, next)=>{
    axios(config)
    .then(function (response) {
      jobs = JSON.stringify(response.data);
      //console.log(response.data);
      res.send(jobs)
    })
    .catch(function (error) {
      console.log(error);
    });
   
};

//module.exports = getJobs;