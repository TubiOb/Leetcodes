function isPalindrome(x: number): boolean {
    let nums = '';
    let numStr = String(x);
    console.log(numStr)
    // for (let i = 0; i < numStr.length; i++) {
    //     console.log('Before Pop', numStr)
    //     nums += numStr.pop();
    //     console.log('After Pop', numStr)
    // }
    // console.log(nums)
    // if (Number(nums) === x) {
    //     return true;
    // }
    // else {
    //     return false;
    // }
    for (let i = numStr.length - 1; i >= 0; i--) {
        nums += numStr[i];
        console.log(numStr.length)
    }
    console.log(nums)
    return Number(nums) === x;
};