const fibonacci = function(num) {
    if(typeof num == 'string') num=+num;
    if(num < 0) return "OOPS";
    if(num == 0) return 0;
    if(num == 1) return 1;
    let prev = 0;
    let current = 1;
    let temp = 0;
    for(let i = 2; i <= num; i++) {
        temp = current;
        current = current + prev;
        prev = temp;
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
