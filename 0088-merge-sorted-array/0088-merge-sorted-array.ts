/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    // nums1.push(...nums2);
    // nums1.splice(m, n);
    // nums1.sort((a, b) => a - b);

    // console.log(nums1)

    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (i >= 0 || j >= 0) {
        if (i >= 0 && j >= 0) {
            if (nums1[i] > nums2[j]) {
                nums1[k] = (nums1[i])
                i--;
            }
            else {
                nums1[k] = nums2[j];
                j--;
            }
        }
        else if (i >= 0) {
            nums1[k] = nums1[i]
            i--;
        }
        else {
            nums1[k] = nums2[j]
            j--;
        }
        k--;
    }

    // nums.splice(m, n);
    console.log(nums1)
};