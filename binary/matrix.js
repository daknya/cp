/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let l = 0;
    let r = matrix[0].length;
    for (i = 0; i < matrix.length; i++) {
        if (matrix[i][r - 1] > target && matrix[i][l] < target) {
            for (j = 0; j < matrix[i].length; j++) {
                let mid = Math.abs((r + l) / 2);

                if (matrix[i][mid] == target) {
                    return true;
                }
                else if (target > matrix[i][mid]) {
                    l = mid + 1;
                }
                else {
                    r = mid - 1;
                }

            }
        }
        else { return false }

    }
};

console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3));