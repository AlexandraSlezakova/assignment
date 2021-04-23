"use strict";
var readline = require('readline');
var jsonFile = require('fs');
var now = require("performance-now");
var Main = require('./main');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("Enter input:");
rl.on('line', function (input) {
    var start = now();
    var output = Main.main(input);
    var end = now();
    if (output == "") {
        console.log("Error: Invalid input");
    }
    else {
        createJSON(input, output, end - start);
        console.log(output);
    }
    rl.close();
});
/**
 * @brief Create JSON file with input, output and the duration of the execution
 * @param inputStr input string
 * @param reverseStr reversed string
 * @param time duration of the execution in milliseconds
 */
function createJSON(inputStr, reverseStr, time) {
    var obj = {
        input: inputStr,
        output: reverseStr,
        duration: time.toString()
    };
    jsonFile.writeFile("processed.json", JSON.stringify(obj, null, 2), function (err) {
        if (err)
            throw err;
    });
}
