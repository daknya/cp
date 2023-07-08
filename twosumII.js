var arr = [2, 3, 4, 5, 6, 7];
var target = 6;



const twosumII = (arr, target) => {



    var left = 0;
    var right = arr.length;

    for (i = 0; i < arr.length; i++) {

        if (arr[left] + arr[right] == target) {
            return [arr[left], arr[right]];
        }
        else if (arr[left] + arr[right] > target) {
            right--;
        }
        else if (arr[left] + arr[right] < target) {
            left++;
        }




    }

}
console.log(twosumII(arr, target)); 