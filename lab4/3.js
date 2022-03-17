/**
 * Напишите функцию rle(str),
 * входные данные - строка
 * выходные данные - строка со свернутыми диапазонами
 * Примеры:
 * rle('AAAB') === 'A3B'
 * rle('BCCADDEEEBB') === 'BC2AD2E3B2'
 */

function rle(str) {
    //code here
    let newStr = ''
    let counter = 1
    str = str.split('')
    if (str.length > 1) {
        for (let i = 1; i < str.length; i++) {
            if (str[i] == str[i - 1]) {
                counter++;
            } else {
                counter > 1 ? newStr += String(str[i - 1]) + String(counter) : newStr += String(str[i - 1])
                counter = 1
            }
        }
        counter > 1 ? newStr += String(str[str.length - 1]) + String(counter) : newStr += String(str[str.length - 1])
        return newStr
    } else {
        return str.join('')
    }
}

module.exports = rle;
