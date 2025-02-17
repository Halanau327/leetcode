/**
 * @param {number[]} nums
 * @return {void}
 */
var findDisappearedNumbers = function (nums) {
    nums.forEach((num) => {
        const index = Math.abs(num) - 1
        nums[index] > 0 ? nums[index] *= -1 : NaN
    })

    return nums.map((num, index) =>
        (num > 0 ? index + 1 : null)
    ).filter((num) => num !== null)
};

findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])


// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var findDisappearedNumbers = function (nums) {
//     let arr = []
//     for (let i = 0; i < nums.length; i++) {
//         let index = Math.abs(nums[i]) - 1;
//
//         if (nums[index] > 0) {
//             nums[index] = nums[index] * -1;
//         }
//     }
//
//
//     for (let j = 0; j < nums.length; j++) {
//
//         if(nums[j] > 0) {
//             arr.push(j + 1);
//         }
//     }
//     return arr
// };
