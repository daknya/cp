/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    strs.sort();

    let count = '';
    if (strs[0].length == 0) {
        return "";
    }
    for (let i = 0; i < strs[0].length; i++) {

        if (strs[0][i] === strs[strs.length - 1][i]) {
            count += strs[0][i];
        }
        else {

            break;
        }

    }
    return count;


};