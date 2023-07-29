/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {

    const map = new Map();
    let count = k;
    var result = 0;
    var runningcount = 0;
    for (i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            runningcount++;
            continue

        } else if (count != 0 && i != 0) {
            runningcount++;
            count--;
            continue;
        }
        else if (count == 0 && !map.has(s[i]) && i != 0) {
            result = Math.max(result, runningcount);
            runningcount = 0;
        }
        else {
            map.set(s[i], i);
            runningcount++;
        }
    }
    return Math.max(result, runningcount);
};

console.log(characterReplacement("AAAA", 0))