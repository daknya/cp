const str = ["eat", "tea", "tan", "ate", "nat", "bat"]


const group = (str) => {
    const map = new Map();
    const result = [[]];
    let temp = [];
    const obj = { k: "key", };

    for (i = 0; i < str.length; i++) {
        temp = str[i].split("");

        if (map.has(temp)) {

            continue;

        }
        else {
            map.set(temp, [str[i]]); // (-_-)
        }


    }
    console.log(map);

}
group(str);


/*



*/

