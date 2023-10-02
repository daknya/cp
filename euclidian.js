const gcd = (a, b) => {

    if (b == 0) {
        return a;
    }
    var r = a % b;
    if (gcd(b, r)) {

        return gcd(b, r);
    }
}


// const extgcd = (a, b, s1, s2, t1, t2) => {

//     if (b == 0) {
//         return `gcd is ${a} ,s=  ${s1}, t =  ${t1}`;
//     }
//     let q = a / b;
//     let r = a - q * b;
//     let s = s1 - s2 * q;
//     let t = t1 - t2 * q;
//     if (extgcd(b, r, s2, s, t2, t)) {
//         return extgcd(b, r, s2, s, t2, t);
//     }
// }
console.log(gcd(100));