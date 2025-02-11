/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++
        }
    }
    console.log(nums)
    return k
};

removeElement([0, 1, 1, 1, 2, 2, 2, 3, 3, 4,], 3)