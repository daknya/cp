/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

    const map = new Map();
    var count = 0;


    for (i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            count = Math.max(count, map.size);

            map.clear();
            map.set(s[i], i);

        } else {

            map.set(s[i], i);
        }
    }
    return Math.max(count, map.size);

};
console.log(lengthOfLongestSubstring("dvdf"))