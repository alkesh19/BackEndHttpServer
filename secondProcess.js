var sendObj = {
    method: "GET"
};

function logResponseBody(jsonBody) {
    console.log(jsonBody);
}

function callbackFn(result) {
    result.json().then(logResponseBody);
}

fetch("http://localhost:3000/doArithmaticForQueryParams?counter=10",sendObj).then(callbackFn)
