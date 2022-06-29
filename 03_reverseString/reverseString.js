const reverseString = function(string) {
    let reversed = "";
    // loop through string, beginning from string.length-1, decrementing
    for (let i = string.length -1; i >= 0; i--){
        // reversed += current character
        reversed += string[i];
    }
    // return reversed
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
