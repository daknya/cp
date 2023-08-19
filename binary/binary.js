/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {

    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
        let mid = r - l / 2;

        if (nums[mid] == target) {
            return mid;
        }
        else if (target > nums[mid]) {
            l = mid + 1;
        }
        else {
            r = mid - 1;
        }

    }
    return -1;

};

console.log(search([1, 2, 3, 4, 5, 6, 7, 8], 8));