/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    let sortedNums1 = nums1.sort((a, b) => a - b)
    let sortedNums2 = nums2.sort((a, b) => a - b)
    let newArr = []
    let k = 0
    let m = 0

    while (k < sortedNums1.length && m < sortedNums2.length) {
        if (sortedNums1[k] === sortedNums2[m]) {
            newArr.push(sortedNums1[k]);
            k++;
            m++;
        } else if (sortedNums1[k] < sortedNums2[m]) {
            k++;
        } else {
            m++;
        }
    }

    return newArr;
};
intersect([2, 5, 3, 6, 7, 2, 2], [21, 25, 3, 4, 11, 1, 2, 2])