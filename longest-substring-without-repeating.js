/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    return new Set(s).size
};

lengthOfLongestSubstring("pwwkew")
