"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
var main = function (input) {
    /* split input string to array */
    var inputArray = input.split("");
    if (!isInputValid(inputArray)) {
        return "";
    }
    return reverseString(inputArray);
};
exports.main = main;
/**
 * @brief Reverse input string, each letter has the opposite case
 * @param str input string as array
 */
function reverseString(str) {
    var reverseStr = String("");
    for (var i = str.length - 1; i >= 0; i--) {
        var char = str[i];
        if (char >= 'a' && char <= 'z') {
            reverseStr += char.toUpperCase();
        }
        else if (char >= 'A' && char <= 'Z') {
            reverseStr += char.toLowerCase();
        }
        else {
            reverseStr += char;
        }
    }
    return reverseStr;
}
/**
 * @brief Check if input contains only alphanumeric characters
 * @param inputArray input string split into array
 */
function isInputValid(inputArray) {
    for (var _i = 0, inputArray_1 = inputArray; _i < inputArray_1.length; _i++) {
        var char = inputArray_1[_i];
        if (!isNumber(char) && !isLetter(char)) {
            return false;
        }
    }
    return true;
}
/**
 * @brief Check if character is number
 * @param str string of length 1
 */
function isNumber(str) {
    return /^\d+$/.test(str);
}
/**
 * @brief Check if character is letter
 * @param str string of length 1
 */
function isLetter(str) {
    return (str >= 'a' && str <= 'z') || (str >= 'A' && str <= 'Z');
}
