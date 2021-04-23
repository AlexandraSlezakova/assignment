export const main = function (input: string) {
    /* split input string to array */
    let inputArray = input.split("");

    if (!isInputValid(inputArray)) {
        return "";
    }

    return reverseString(inputArray);
}

/**
 * @brief Reverse input string, each letter has the opposite case
 * @param str input string as array
 */
function reverseString(str: string[]): string {
    let reverseStr = String("");

    for (let i = str.length - 1; i >= 0; i--) {
        let char = str[i];

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
function isInputValid(inputArray: string[]): boolean {
    for (let char of inputArray) {
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
function isNumber(str: string): boolean {
    return /^\d+$/.test(str);
}

/**
 * @brief Check if character is letter
 * @param str string of length 1
 */
function isLetter(str: string): boolean {
    return (str >= 'a' && str <= 'z') || (str >= 'A' && str <= 'Z');
}
