const removeFromArray = function(array, ...args) {
    //filter method passing item !== args
    return array.filter(item => !args.includes(item))
};

// Do not edit below this line
module.exports = removeFromArray;
