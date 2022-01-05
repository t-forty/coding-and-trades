// To start app run this code in cmd line: DEBUG=myapp:* npm start
const express = require('express');
const app = express();
const port = 5000;

app.set('port', process.env.PORT || 5000);

// middleware
app.use(express.json());

// static files
app.use(express.static('public'));
//routes
app.get('/', (req, res) => {
    res.send('Hello from the BACKEND')
})
app.post('/test-form-data', (req, res) => {
    console.log(req.body);
    res.json(req.body);
})

// Define Routes
app.use('/jobs', require('./routes/jobs'));
app.use('/users', require('./routes/users'));

app.listen(port, ()=>{
    console.log(`listening to port ${port}`);
})