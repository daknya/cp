/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    var k = nums.length;

    const map = new Map();


    for (let i = 0; i < nums.length; i++) {


        if (map.has(nums[i])) {
            k--;
        }
        else {
            map.set(nums[i], i);
        }
    }


    return k;
};


console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
