/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let num = x;
    let digits = [];
    let reverse = [];
    
    if (x < 0) {
        return false;
    } else {
        while (num > 0 ) {
            digits.push(num%10);
            num = Math.trunc(num/10);
        }
        reverse = digits.slice();
        reverse.reverse();
    }
    for(let i = 0; i < digits.length; i++) {
        if(digits[i] !== reverse[i]) {
            return false;
        }
    }
    return true;
};