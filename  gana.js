var groupAnagrams = function (strs) {

    let m = new Map();
    for (let str of strs) {
        let sorted = str.split("").sort().join("");
        if (m.has(sorted)) {
            m.set(sorted, [...m.get(sorted), str]);
        }
        else {
            console.log(sorted + " else");
            m.set(sorted, [str]);
        }
    }
    return Array.from(m.values());

};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))