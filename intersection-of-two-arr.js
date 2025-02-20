/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    let sortedNums1 = nums1.sort((a, b) => a - b)
    let sortedNums2 = nums2.sort((a, b) => a - b)
    let newArr = []

    console.log(sortedNums1)
    console.log(sortedNums2)

    let minLength = sortedNums1.length
    if (sortedNums1.length > sortedNums2.length) {
        minLength = sortedNums2.length
    }

    for (let i = 0; i < minLength; i++) {
        console.log(minLength)
        if (sortedNums1[i] === sortedNums2[i]) {
            newArr.push(sortedNums1[i])
        }
    }
    return newArr

};
intersect([2, 5, 3, 6, 7, 2, 2], [21, 25, 3, 4, 11, 1, 2, 2])