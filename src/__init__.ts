const readline = require('readline');
const jsonFile = require('fs');
const now = require("performance-now")
const Main = require('./main');

const rl = readline.createInterface( {
    input: process.stdin,
    output: process.stdout
});

console.log("Enter input:");

rl.on('line', (input: string) => {
    let start = now();

    let output = Main.main(input);

    let end = now();

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
function createJSON(inputStr: string, reverseStr: string, time: number) {
    let obj = {
        input: inputStr,
        output: reverseStr,
        duration: time.toString()
    };

    jsonFile.writeFile("processed.json", JSON.stringify(obj, null, 2), function(err: any) {
            if (err) throw err;
        }
    );
}