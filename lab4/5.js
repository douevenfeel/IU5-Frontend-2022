/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Для прохождения тестов на эту задачу их необходимо раскоментить в файле tests/lab4.test.js
 * Напишите функцию checkBrackets(str),
 * на вход подается строка состоящая из скобок разной вложенности, варианты скобок: []<>()
 * необходимо определеить, правильно ли они вложены
 * Примеры:
 * [[]]()<> --> true
 * ([)]()<> --> false
 * [(<>)] --> true
 */

function checkBrackets(str) {
    //code here
    str = str.split('')
    let checking = Array()
    for (let i = 0, j = 0; i < str.length; i++) {
        if (str[i] == '[' || str[i] == '(' || str[i] == '<') {
            checking.push(str[i])
            j++
        } else if (
            (str[i] == ']' && (checking[j - 1] == '[')) ||
            (str[i] == ')' && (checking[j - 1] == '(')) ||
            (str[i] == '>' && (checking[j - 1] == '<'))
        ) {
            checking.pop()
            j--
        } else {
            return false
        }
    }
    return((checking.length == 0)? true : false)
}

module.exports = checkBrackets;
