function removeDuplicates(nums: number[]): number {
    // const arraySet = new Set(nums);
    // nums = Array.from(arraySet);
    // console.log("Converted Array to Set: ", arraySet)
    // console.log("Converted Set to Array: ", nums)
    for (let i = nums.length - 1; i >= 0; i--) {
        const charI = nums[i];
        for (let j = i - 1; j >= 0; j--) {
            const charJ = nums[j];
            if (charI === charJ) {
                nums.splice(i, 1);
                break;
            }
        }
    }
    return nums.length;
};