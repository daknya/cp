/**
 * @param {number[]} he
 * @return {number}
 */
var maxArea = function (he) {
    let max = 0;
    let l = 0;
    let r = he.length - 1;

    for (i = 0; i < he.length; i++) {

        if (he[l] >= he[r]) {
            console.log(he[l] + " if" + he[r]);

            if (max < ((r - l) * he[r])) {
                console.log("i m inside " + (r - l * he[r]));
                max = (r - l) * he[r];
            }

            r--;

        }
        else if (he[l] < he[r]) {
            console.log(he[l] + " e if" + he[r]);

            if (max < ((r - l) * he[l])) {
                max = (r - l) * he[l];
                console.log("i m inside  " + (r - l * he[l]));
            }
            l++
            console.log("i m outsside " + l);
        }

    }
    return max;
};


console.log(maxArea([7, 0, 7, 9, 1, 9, 0, 2, 2]))