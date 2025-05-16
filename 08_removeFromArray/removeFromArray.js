const removeFromArray = function(arr, ...rest) {
    for(let i = 0; i < rest.length; i++) {
        while(arr.some(element => element === rest[i])){
            arr.splice(arr.indexOf(rest[i]), 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
