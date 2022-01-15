function isPalindrome(x: number): boolean {

    if(x < 0 || (x % 10 == 0 && x != 0)) {
        return false;
    }
    let revertedNumber:number = 0;
    while(x > revertedNumber) {
        
        revertedNumber = revertedNumber * 10 + x % 10;
        if(x==revertedNumber) break;
        x = Math.floor(x/10);
    }
    return x == revertedNumber || x == revertedNumber/10;
};


module.exports = isPalindrome;
