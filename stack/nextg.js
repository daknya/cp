/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let stack = [];
    var topindex;
    var res = [];
    let ans = []

    for (i = nums2.length - 1; i > -1; i--) {

        if (stack[topindex] > nums2[i]) {
            res[i] = stack[topindex]
            stack.push(nums2[i]);
            topindex++;


        }
        else if (stack[topindex] <= nums2[i]) {
            while (stack[topindex] > nums2[i] || topindex == -1) {
                stack.pop();
                topindex--;
            }
            stack.pop()
            topindex--;
            if (topindex == -1) {
                res[i] = -1;
            }
            else {
                res[i] = stack[topindex]
            } stack.push(nums2[i]);
            topindex++;



        }
        else {
            stack.push(nums2[i]);
            res[i] = -1;
            topindex = 0;
        }
    }


    for (i = 0; i < nums1.length; i++) {
        ans.push(res[nums2.indexOf(nums1[i])]);
    }
    return ans;

};
console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]
))