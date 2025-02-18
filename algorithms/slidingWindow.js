// function maxSumSubarray(arr, k) {
//     let maxSum = 0;
//     let windowSum = 0;
//     let left = 0;  // Левый указатель
//
//     for (let right = 0; right < arr.length; right++) {
//         windowSum += arr[right];  // Расширяем окно
//
//         if (right >= k - 1) {  // Когда окно достигло размера k
//             maxSum = Math.max(maxSum, windowSum);
//             windowSum -= arr[left];  // Сужаем окно (убираем левый элемент)
//             left++;  // Двигаем левый указатель
//         }
//     }
//
//     return maxSum;
// }
//
// // Пример использования
// const arr = [1, 3, 2, 4, 1, 5];
// const k = 3;
// console.log(maxSumSubarray(arr, k));  // Вывод: 10
//
// // 1. right  = 0, windowSum = 1;
// // 2. right  = 1, windowSum = 4;
// // 3. right  = 2, windowSum = 6, maxSum = 6, windowSum = 5;
// // 4. right  = 3, windowSum = 9, maxSum = 9, windowSum = 6;
// // 5. right  = 4, windowSum = 7, maxSum = 9, windowSum = 5;
// // 6. right  = 5, windowSum = 10, maxSum = 10, windowSum = 10;
// // Ответ, maxSum = 10


//
// function longestSubstringWithoutRepeats(s) {
//     const charSet = new Set();  // Множество для хранения уникальных символов
//     let maxLength = 0;
//     let left = 0;  // Левый указатель
//
//     for (let right = 0; right < s.length; right++) {  // Правый указатель двигается вперед
//         while (charSet.has(s[right])) {  // Если символ уже есть в окне
//             charSet.delete(s[left]);  // Убираем символ с левого края
//             left++;  // Двигаем левый указатель
//         }
//         charSet.add(s[right]);  // Добавляем текущий символ в окно
//         maxLength = Math.max(maxLength, right - left + 1);  // Обновляем максимальную длину
//     }
//
//     return maxLength;
// }
//
// // Пример использования
// const s = "abcabcbb";
// console.log(longestSubstringWithoutRepeats(s));  // Вывод: 3 (подстрока "abc")

// 1. right = 0, charset = 'a', maxLength = 1;
// 2. right = 1, charset = 'ab', maxLength = 2;
// 3. right = 2, charset = 'abс', maxLength = 3;
// 4. right = 3, charset = 'bсa', left = 1, maxLength = 3;
// 5. right = 4, charset = 'сab', left = 2, maxLength = 3;
// 6. right = 5, charset = 'abc', left = 3, maxLength = 3;
// 7. right = 6, charset = 'bcb', left = 4, maxLength = 3;
// 8. right = 7, charset = 'cbb', left = 5, maxLength = 3;


function longestSubstringWithoutRepeats(s) {
    const charSet = new Set();
    let maxLength = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
        console.log(maxLength);
    }

    return maxLength;
}

longestSubstringWithoutRepeats("abcabcbb");

// Пример использования
const s = "abcabcbb";
console.log(longestSubstringWithoutRepeats(s));
