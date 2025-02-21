/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let ransomNoteSorted = ransomNote.split('').sort()
    let magazineSorted = magazine.split('').sort()

    let k = 0
    let m = 0
    let newArr = []
    while (k < ransomNoteSorted.length && m < magazineSorted.length) {
        if(ransomNoteSorted[k] === magazineSorted[m]) {
            newArr.push(ransomNoteSorted[k]);
            k++
            m++
        } else if (ransomNoteSorted[k] < magazineSorted[m]) {
            k++
        } else {
            m++
        }
    }

    let newStr = newArr.join('')


    return newStr.length === ransomNote.length;
};

canConstruct('asv', 'gsdassdv')