/**
 * починить функцию memoize(func),
 * на вход принимает функцию
 * на выходе получаем функцию, которая умеет запоминать последний результат вызова
 * примеры:
 * const add = (a) => a * 2;
 * const memozedAdd = memoize(add)
 * memozedAdd(1) -> {cache: false, result: 2}
 * memozedAdd(1) -> {cache: true, result: 2}
 * memozedAdd(2) -> {cache: false, result: 4}
 * memozedAdd(1) -> {cache: false, result: 2}
 * memozedAdd(2) -> {cache: false, result: 4}
 * memozedAdd(2) -> {cache: true, result: 4}
 */

function memoize(func) {
    //code here
    let cache = {};
    return (...args) => {
        let temp = args;
        if (temp in cache) {
            return { cache: true, result: cache[temp] };
        } else {
            cache = {};
            cache[temp] = func(temp);
            return { cache: false, result: cache[temp] };
        }
    };
}

module.exports = memoize;
