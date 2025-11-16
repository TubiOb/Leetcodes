function containsDuplicate(nums: number[]): boolean {
    let maxNums = Math.max(...nums);
    let countNums = {};
    let highestFreq = 2;
    let isMajor = false;

    for (let num of nums) {
        countNums[num] = (countNums[num] || 0) + 1;
        if (countNums[num] >= highestFreq) {
            isMajor = true;
        }
    }
    return isMajor;
};