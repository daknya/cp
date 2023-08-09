/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let stack = [];

    const map = new Map();
    var topindex;
    var res = [];

    for (i = nums2.length - 1; i >= -1; i--) {

        if (stack[topindex] > nums2[i]) {
            map.set(nums2[i], stack[topindex]);
            stack.push(nums2[i]);
            topindex++;


        }
        else if (stack[topindex] <= nums2[i]) {
            while (stack[topindex] > nums2[i] || topindex == -1) {
                stack.pop();

                topindex--;
            }
            stack.push(nums2[i]);
            topindex++;
            map.set(nums2[i], -1);

        }
        else {
            stack.push(nums2[i]);
            map.set(nums2[i], -1);
            topindex = 0;
        }
    }

    // for (i = 0; i < nums1.length; i++) {
    //     res.push(map[nums1[i]]);
    // }
    console.log(map)

};
console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]
))