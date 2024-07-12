const removeFromArray = function(array, ...args) {
    // Function Declaration
    // return array.filter(function(val){
    //     return !args.includes(val)
    // });
    
    // Arrow Function
    return array.filter(val => !args.includes(val))
};

// Do not edit below this line
module.exports = removeFromArray;
