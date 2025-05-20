const palindromes = function (str) {
    const alpha = "abcdefghijklmnopqrstuvwxyz0123456789";
    const newStr = str.toLowerCase().split('').filter(char => alpha.includes(char)).join('');
    const reverse = newStr.split('').reverse().join('');
    return newStr == reverse;
};

// Do not edit below this line
module.exports = palindromes;
