function searchInsert(nums: number[], target: number): number {
    for (let i = 0; i < nums.length; i++) {
        const char = nums[i];
        if (char === target) {
            return i;
        }
        else if (!nums.includes(target)) {
            console.log(nums)
            nums.push(target);
            console.log(nums)
            nums.sort((a, b) => a - b);
            console.log(nums)
            return nums.indexOf(target)
        }
    }
};