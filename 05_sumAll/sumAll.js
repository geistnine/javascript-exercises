const sumAll = function(int1, int2) {
    if(int1 < 0 || int2 < 0 || typeof(int1) !== "number" || typeof(int2) !== "number"){
        return "ERROR";
    }
    let biggerNum = int2;
    let smallerNum = int1;
    if(int1 > int2) {
        biggerNum = int1;
        smallerNum = int2;
    }
    
    let sum = 0;
    for (let i = biggerNum; i >= smallerNum; i--){
        sum += i;
    }
    return sum
};
console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
