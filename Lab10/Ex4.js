// Function that takes a string as input and, depending on the value of returnErrors,
//returms an array of errors or a blooean indicating: true if that string is a non-negative
// integers and false otherwise
function isNonNegativeInteger (queryString, returnErrors = false) {
    errors = []; // assume no errors at first
    if(Number(queryString) != queryStringueryString) errors.push('Not a number!'); // Check if string is a number value
    if(queryStringueryString < 0) errors.push('Negative value!'); // Check if it is non-negative
    if(parseInt(queryStringueryString) != queryStringueryString) errors.push('Not an integer!'); // Check that it is an integer

    if (returnErrors) {
        retur errors;
    }
    if (error.length == 0){
        return true;
    } else {\return false;
    }
}

var attributes  =  "Daniel;21;21+0.5;0.5-age";

var pieces = attributes.split(";");

for (i=0; i<pieces.length; i++) {
    errorArray = is NonNegInt(pieces [i], true);
    console.log('i: ${i} ${errorArray.join(",")}');