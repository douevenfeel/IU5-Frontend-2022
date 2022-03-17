/**
 * Напишите функцию isPalindrome(str),
 * входные данные - строкa
 * выходные данные - boolean - является ли переданная строка палиндромом
 * Примеры:
 * "мир" -> false
 * "тот" -> true
 */
function isPalindrome(str) {
    //code here
    let bool = true
    let tempStr = str.split('')
    for (var i = 0; i < (tempStr.length - 1) / 2; i++) {
        (tempStr[i] == tempStr[tempStr.length - 1 - i] && bool == true) ? bool = true: bool = false;
    }
    return bool;
}

module.exports = isPalindrome;
