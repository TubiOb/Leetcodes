function isPalindrome(x: number): boolean {
    let nums = '';
    let numStr = String(x);
    for (let i = numStr.length - 1; i >= 0; i--) {
        nums += numStr[i];
    }
    return Number(nums) === x;
};