function majorityElement(nums: number[]): number {
    let maxNum = Math.max(...nums);
    let countNums = {};
    let highestFreq = 0;
    let major;


    for (let num of nums) {
        countNums[num] = (countNums[num] || 0) + 1;
        // console.log('Number of appearance of item: ', countNums[num])
        if (countNums[num] > highestFreq) {
            highestFreq = countNums[num];
            major = num;
        }
    }
    return major;
};