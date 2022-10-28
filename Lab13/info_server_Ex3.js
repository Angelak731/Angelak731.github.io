function isNonNegativeInteger(queryString, returnErrors = false) {
    errors = []; // assume no errors at first
    if (Number(queryString) != queryString) {
        errors.push('Not a number!'); // Check if string is a number value
    } else {
        if (queryString < 0) errors.push('Negative value!'); // Check if it is non-negative
        if (parseInt(queryString) != queryString) errors.push('Not an integer!'); // Check that it is an integer
    }
    if (returnErrors) {
        return errors;
    } else if (errors.length == 0) {
        return true;
    } else {
        return false;
    }
}
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));

app.all('/test', function (request, response, next) {
    response.send("Got a test path");
    next();
});

app.all('*', function (request, response, next) {
    console.log.send(request.method + ' to path ' + request.path);
    next();
});

app.post("/process_form", function (request, response) {
    var q = request.body['text1'];
    if (typeof q != 'undefined') {
        if (isNonNegativeInteger(q)) {
        response.send(`Thank you for purchasing <B>${q} things!`);
    } else {
        response.send('${q} is not a valid quantity -- hit the back button');
    }
}  
 });
 
app.listen(8080, () => console.log(`listening on port 8080`));

