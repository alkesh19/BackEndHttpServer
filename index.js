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
//app.use(middleware);

function calculateSum(counter) {
    var sum = 0;
    for(var i=0; i<=counter; i++) {
        sum+=i;
    }
    return sum;
}

function calculateMul(counter) {
    var mul = 1;
    for(var i=1; i<=counter; i++) {
        mul= mul*i;
    }
    console.log("Mul is: "+mul);

    return mul;

}

function handleFirstRequest(req,res) {
    var calculatedSum = calculateSum(100);

    console.log(calculateSum);
    var answer = "The sum of 1 to 100 is "+calculatedSum;
    res.send(answer);
}

// Do arithmatict operation for query parameter and return Json respo
function doArithmaticOperation(req,res) {
    console.log("doArithmaticOperation called....");
    var counter = req.query.counter;
    if(counter>1000) {
        res.send({error:'Too big number'});
    } else {
        var calculatedSum = calculateSum(counter);
        var calculatedMul = calculateMul(counter);
    
        var answerObject =  {
            sum: calculatedSum,
            mul: calculatedMul
        }    
        res.send(answerObject);
    }
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

function givePage(req,res) {
    res.send(`<head> <title> Hello response page </title> </head> <body>Hello I am Backend Response<body>`)
}

function sendHtmlFileAsResponse(req,res) {
    res.sendFile(__dirname+"/sampleResponse.html");
}

//Default for any route after the
//app.get('/:anything', handleFirstRequest) 

app.get('/', givePage) 

// Returning HTML file as response
app.get('/fileResponse',sendHtmlFileAsResponse);

//To do sume for query params
app.get('/doSumForQueryParams', doSumForQueryParams) 

//To do sume for body params
app.post('/doSumForPostRequest',doSumForPostRequest);

//To do sume for query params
app.get('/doArithmaticForQueryParams', doArithmaticOperation);

function started() {
    console.log(`My first web app listening on port ${port}`)
}

app.listen(port, started)
