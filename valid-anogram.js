/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
   s.length !== t.length
   return s.split('').sort().join('') === t.split('').sort().join('')

};

isAnagram('acbdf', 'abdfc')