const editDistance = (word1, word2) => {

    let m = word1.length;
    let n = word2.length;



    const matrix[m][n];

    for (let i = 0; i <= m; i++) {
        matrix[i][0] = i;
    }
    for (let j = 0; j <= n; j++) {

        matrix[0][j] = j;
    }

    console.log(matrix);



}

editDistance('hello', 'hi');