/**
 * Напишите функцию getAnagramms(arr),
 * входные данные - массив строк
 * выходные данные - массив элементов, где каждый элемент является массивом анаграмм (строки)
 * Примеры:
 * ['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']; -> [["мир", "Рим", "мри"], ["сирота", "Ариост"], ["пва", "авп"]]
 */
function getAnagramms(arr) {
    //code here
    let newArr = Array()
    let arrSort = Array()
    let arrWords = Array()
    let tempArr
    let tempWord
    for (let i = 0; i < arr.length; i++) {
        tempWord = arr[i].toLowerCase().split('').sort().join('')
        if (arrSort.includes(tempWord) == false) {
            arrWords.push(arr[i])
            arrSort.push(tempWord)
        }
    }
    for (let i = 0; i < arrWords.length; i++) {
        tempArr = []
        tempArr.push(arrWords[i])
        for (let j = i + 1; j < arr.length; j++) {
            ((arr[j].toLowerCase().split('').sort().join('') == arrSort[i]) && (tempArr.includes(arr[j]) == false)) ? tempArr.push(arr[j]): false;
        }
        newArr.push(tempArr)
    }
    return newArr
}

module.exports = getAnagramms;
