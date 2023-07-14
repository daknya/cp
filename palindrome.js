var string = "illi";

const palindrome = (str) => {
    let re = str.split("");
    let left = 0;
    let right = re.length - 1;
    console.log(re);


    for (i = 0; i < re.length;) {
        console.log(left);
        console.log(right);
        if (left >= right) {
            return true;
        }
        else {
            if (re[left] === re[right]) {
                left++;
                right--;
            }
            else {
                return false;
            }
        };

    }
    return false;
}
console.log(palindrome(string));