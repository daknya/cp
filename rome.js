/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    /*

    I 1

    v 5

    x 10

    l 50
    c 100
    d 500
    m 1000
     
     */
    var result = 0;
    var prev;
    for (let i = 0; i < s.length; i++) {
        switch (s.charAt(i)) {
            case 'I':
                prev = 'I';
                result = result + 1;
                break;

            case 'V':
                if (prev === 'I') {
                    result = result + 5 - 2;
                }
                else {
                    result = result + 5;
                }
                break;

            case 'X':

                if (prev === 'I') {
                    result = result + 10 - 2;
                }
                else {
                    result = result + 10;

                }
                prev = 'X'
                break;

            case 'L':
                if (prev === 'X') {
                    result = result + 50 - 20;

                }
                else {
                    result = result + 50;


                }

                break;

            case 'C':
                if (prev === 'X') {
                    result = result + 100 - 20;

                }
                else {
                    result = result + 100;


                }
                prev = 'C';
                break;

            case 'D':
                if (prev === 'C') {
                    result = result + 500 - 200;

                }
                else {
                    result = result + 500;


                }

                break;
            case 'M':
                if (prev === 'C') {
                    result = result + 1000 - 200;

                }
                else {
                    result = result + 1000;


                }

                break;
            default:
                return NULL;
        }
    }
    return result;
};