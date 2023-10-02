/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {

    let j = 0;
    let index = 0;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] == needle[index]) {
            index++;
            j = i;

            if (index == needle.length) {
                return j - (index - 1);
            }
        }
        else {
            i = i - index;
            index = 0;
        }
    }

    return -1;
};