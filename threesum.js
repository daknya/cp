const findTriplets = (arr, n) => {

    for (var i = 0; i < n; i++) {

        // we have to create a hash table to store the elemen
        const map = new Map();
        for (var j = i + 1; j < n; j++) {
            let sum = -(arr[i] + arr[j]);

            if (map.has(sum)) {
                return true;
            }
            else {
                map.set(arr[j], i);
                console.log(map);
            }
        }
        return false;



    }




    //your code here
}
var arr = [1, 0, 7];
var n = 3;
var bool = findTriplets(arr, n);
console.log(bool);