const express = require('express')
const app = express()
const port = 3000

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
    var counter = req.query.counter;
    console.log("Query parameter counter: "+counter);
    var calculatedSum = calculateSum(counter);
    console.log(calculateSum);
    var answer = "The sum is "+calculatedSum;
    res.send(answer);
}

app.get('/doSumForQueryParams', doSumForQueryParams) 
//Default for any route after the / 
app.get('/:anything', handleFirstRequest) 

function started() {
    console.log(`My first web app listening on port ${port}`)
}

app.listen(port, started)
