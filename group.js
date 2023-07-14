const str = ["eat", "tea", "tan", "ate", "nat", "bat"]


const group = (str) => {
    const map = new Map();
    const result = [[]];
    let temp = [];

    for (i = 0; i < str.length; i++) {
        temp = str[i].split("");
        if (map.size === 0) {
            map.set(temp, i);
            result[i] = temp.join();
            console.log(map);
            console.log(result);
        }
        else {
            for (j = 0; j < temp.length; j++) {
                if (map.has(temp[j])) {
                    console.log(map);
                    continue;

                }
                else {
                    map.set(temp[j], i)
                }
                console.log(map);
            }
        }
    }

}
group(str);