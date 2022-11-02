function isNonNegInt (queryString, returnErrors = false) {
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

pieces.forEach(
    (item, index) => {
    console.log(`part ${index}:${item} is ${(isNonNegInt(item)?'a':'not a')} quantity`);
    }
);