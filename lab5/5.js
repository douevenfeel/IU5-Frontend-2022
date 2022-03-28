/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Напишите функцию makeRoute([{from: string, to: string}]),
 * на вход подается массив, состоящий из объектов с полями to from
 * необходимо вернуть отсортированный массив объектов по правильному пути
 * Примеры:
 * [
    { from: 'L', to: 'M' },
    { from: 'M', to: 'N' },
    { from: 'A', to: 'L' },
    { from: 'B', to: 'A' },
    { from: 'N', to: 'Z' },
]
-->
[
    {"from": "B", "to": "A"},
    {"from": "A", "to": "L"},
    {"from": "L", "to": "M"},
    {"from": "M", "to": "N"},
    {"from": "N", "to": "Z"}
]
 */

function makeRoute(arr) {
    //code here
    let sortedArr = [];
    arr.forEach((element) => {
        let checking = false;
        for (arg of arr) {
            if (arg.to == element.from) {
                checking = true;
            }
        }
        checking == false && sortedArr.push(element);
    });
    for (let i = 0; i < arr.length; i++) {
        let nextArg;
        for (element of arr) {
            if (element.from == sortedArr[sortedArr.length - 1].to) {
                nextArg = element;
                break;
            }
        }
        nextArg !== undefined && sortedArr.push(nextArg);
    }
    return sortedArr;
}

module.exports = makeRoute;
