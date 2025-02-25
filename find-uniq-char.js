// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    const counts = {}

    for (let char of s) {
        if (counts[char]) {
            counts[char]++;
        } else {
            counts[char] = 1
        }
    }

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (counts[char] === 1) {
            return i;
        }
    }
    return -1
};


firstUniqChar('leetcode')