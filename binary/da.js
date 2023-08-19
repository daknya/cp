/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {

    var Hmid, vMid;
    var top = 0;
    var bottom = matrix.length - 1;

    var l = 0;
    var r = matrix[0].length - 1;
    var flag = false;


    while (top <= bottom) {
        Hmid = top + Math.floor((bottom - top) / 2);
        if (target > matrix[Hmid][matrix[Hmid].length - 1] && top != Hmid + 1) {
            top = Hmid + 1;
        }
        else if (target < matrix[Hmid][0] && bottom != Hmid - 1) {
            bottom = Hmid - 1;
        }
        // else if (flag == true) {
        //     return false;
        // }
        else {
            // if (target > matrix[Hmid][0] && target < matrix[Hmid][l]) {
            Hmid = top === bottom ? top : Hmid;
            while (l <= r) {
                // flag = true;
                vMid = Math.floor(l + (r - l) / 2);

                if (matrix[Hmid][vMid] == target) {
                    return true;
                }
                else if (matrix[Hmid][vMid] < target) {
                    l = vMid + 1;
                }
                else {
                    r = vMid - 1;
                }
            }
            // }
        }
    }

    return false;
};


console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 60))