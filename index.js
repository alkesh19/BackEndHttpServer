const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000


function middleware(req,res, next) {
    console.log("From inside middleware "+ req.headers.counter);
    next();
}

//app.use(middleware);
app.use(bodyParser.json());
app.use(middleware);

function calculateSum(counter) {
    var sum = 0;
    for(var i=0; i<=counter; i++) {
        sum+=i;
    }
    return sum;
}

function handleFirstRequest(req,res) {
    var calculatedSum = calculateSum(100);
    console.log(calculateSum);
    var answer = "The sum of 1 to 100 is "+calculatedSum;
    res.send(answer);
}

function doSumForQueryParams(req,res) {
    var counter = req.query.counter;
    console.log("Query parameter counter: "+counter);
    var calculatedSum = calculateSum(counter);
    console.log(calculateSum);
    var answer = "The sum is "+calculatedSum;
    res.send(answer);
}

function doSumForPostRequest(req,res) {
    //var counter = req.query.counter;
    //var counter = req.headers.counter;
    console.log(req.body);
    var counter = req.body.counter;

    console.log("Query parameter counter: "+counter);
    var calculatedSum = calculateSum(counter);
    console.log(calculateSum);
    var answer = "The sum is "+calculatedSum;
    res.send(answer);
}

//To do sume for query params
app.get('/doSumForQueryParams', doSumForQueryParams) 

//Default for any route after the
app.get('/:anything', handleFirstRequest) 

//To do sume for body params
app.post('/doSumForPostRequest',doSumForPostRequest);


function started() {
    console.log(`My first web app listening on port ${port}`)
}

app.listen(port, started)
