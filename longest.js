/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    const newarr = new Set(nums);

    let longest = 0;
    for (let i = 0; i < nums.length; i++) {
        console.log(i);

        // Only consider the starting element of a potential sequence
        if (!newarr.has(nums[i] - 1)) {
            console.log(nums[i]);

            let length = 1;
            // Check consecutive elements in the set
            while (newarr.has(nums[i] + length)) {
                console.log(i);
                length++;
            }
            longest = Math.max(longest, length);
        }
    }
    return longest;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))