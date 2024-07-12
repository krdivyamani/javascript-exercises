const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
    let ans = 0;
    const start = Math.min(num1, num2);
    const end = Math.max(num1, num2)
    for(i = start; i <= end; i ++){
        ans += i;
    }
    return ans
};

// Do not edit below this line
module.exports = sumAll;
