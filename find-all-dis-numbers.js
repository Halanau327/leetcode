/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {

    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1; // Берем абсолютное значение
        if (nums[index] > 0) { // Помечаем только если число еще не помечено
            nums[index] = nums[index] * -1;
        }
    }
    console.log(nums)
};

findDisappearedNumbers([4, 6, 7, 3, 1, 2, 6, 7])