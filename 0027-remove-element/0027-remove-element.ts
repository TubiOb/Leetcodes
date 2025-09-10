function removeElement(nums: number[], val: number): number {
    for (let i = nums.length - 1; i >= 0; i--) {
        const charI = nums[i];
        if (charI === val) {
            nums.splice(i, 1);
        }
    }
    return nums.length;
};