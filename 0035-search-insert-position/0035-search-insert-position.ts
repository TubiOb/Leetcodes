function searchInsert(nums: number[], target: number): number {
    for (let i = 0; i < nums.length; i++) {
        const char = nums[i];
        if (char === target) {
            return i;
        }
    }
    if (!nums.includes(target)) {
        nums.push(target);
        nums.sort((a, b) => a - b);
        return nums.indexOf(target)
    }
};