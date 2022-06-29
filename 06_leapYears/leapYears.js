const leapYears = function(year) {
    // leap years are divisible by four but are not leap years
    // if divisible by 100, but 400 is ok
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
