/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let r = height.length - 1, l = 0;
    maxleft = height[l], maxright = height[r];
    result = 0;
    while (l < r) {
        if (height[l] < height[r]) {
            l++;
            maxleft = Math.max(maxleft, height[l])
            result += maxleft - height[l]
        }
        else {
            r--;
            maxright = Math.max(maxright, height[r])
            result += maxright - height[r]
        }
    }
    return result;

};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))