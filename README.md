# TypeScript package

TypeScript package that runs on Node.js. The package does input-output operation. As an input, it takes a string 
containing only alphanumeric characters. As an output, it displays the string in reverse and each letter has 
the opposite case (upper to lower and vice versa). It saves the output in JSON format to a file “processed.json” 
(overriding if the file exists) where input, output, and the duration of the execution is present.

## How to run

Clone project and install `package.json` dependencies via `npm install`. The package has the following scripts defined:
* “build” compiles the code
* “run” executes the logic
* “test” executes unit tests. 

Test results are printed in the console and HTML report is generated using `mochawesome-report-generator`.