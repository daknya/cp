


const anagram = (s, t) => {

    console.log(s.length);
    console.log(t.length);

    if (s.length != t.length) {
        return false;
    }
    var str1 = s.split("").sort().join("");
    console.log(str1);
    var str2 = t.split("").sort().join("");
    console.log(str2);

    if (str1 === str2) {
        return true;
    }
    else {
        return false;

    }
}

var s = 'hello';
var t = 'hello';

console.log(anagram(s, t));