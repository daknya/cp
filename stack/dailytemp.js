/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    let arr = new Array(temperatures.length).fill(0);

    let left = 0;
    let right = 1;
    while (left < temperatures.length) {
        if (temperatures[left] < temperatures[right]) {
            arr[left] = right - left;
            left++;
            right = left + 1
            if (right == temperatures.length) {
                arr[left] = 0;
            }
        }
        else if (right >= temperatures.length) {
            left++;
            right = left + 1;
        }
        else {
            right++;
        }
    }

    return arr;
};