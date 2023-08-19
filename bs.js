/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let l = 0;
    let r = matrix[0].length;

    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][r - 1] >= target && matrix[i][l] <= target) {
            while (l <= r) {
                let mid = Math.floor((r + l) / 2);

                if (matrix[i][mid] === target) {
                    return true;
                } else if (target > matrix[i][mid]) {
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
            }
        } else {
            return false;
        }
    }

    return false;
};


