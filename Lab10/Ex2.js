const {split} = require("lodash");

var attributes  =  "<name>;<age>;<major>"
var pieces = attributes.split(";");

for (i=0; i<pieces.length; i++) {
    console.log('i=${1} value=${pieces[i]} type=$(typeof pieces[i]}');
}
