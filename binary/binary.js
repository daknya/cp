/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let l = 0;
    let r = nums.length - 1;
    for (i = 0; i <= nums.length; i++) {
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