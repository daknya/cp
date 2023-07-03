const twosum = (nums, target) => {

    const map = new Map();

    for (i = 0; i < nums.length; i++) {
        var tocheck = target - nums[i];
        if (map.has(tocheck)) {
            return [map.get(tocheck), i];
        }
        map.set(nums[i], i);


    }
}
var nums = [1, 2, 3, 4];

console.log(twosum(nums, 3));