/**
 * Напишите функцию get1DArray(arr),
 * на вход подается массив бесконечной вложенности массивов arr
 * необходимо вернуть одномерный массив
 * Примеры:
 * [1, 2, 'aa', [1, 2, 3],
    [
        [1, 2],
        [1, 2]
    ],
    [
        [
            [1, 2, [1, 2, [2]]], 3
        ], 4
    ]
]; ---> [1, 2, "aa", 1, 2, 3, 1, 2, 1, 2, 1, 2, 1, 2, 2, 3, 4]
*/

function get1DArray(arr) {
    //code here
    let temp
    let tempArr = Array()
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'object') {
            temp = get1DArray(arr[i])
            for (let j = 0; j < temp.length; j++) {
                tempArr.push(temp[j])
            }
        } else {
            tempArr.push(arr[i])
        }
    }
    return tempArr
}

module.exports = get1DArray;
