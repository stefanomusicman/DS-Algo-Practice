// LeetCode Problem 48. Rotate Image
// Must modify the matrix *** IN PLACE *** 
// NO ADDITONAL SPACE 

/*

STRATEGY:

- FIRST TRANSPOSE:
    - DETERMINE THE DIAGONAL LINE
    - THE DIAGONAL LINE IS BASICALLY WHEN J === I
    - YOU WANT TO SWAP EVERYTHING WHEN J > I
    - SWAP (0,1) WITH (1,0)

*/

var rotate = function (matrix) {
    // FIRST TRANSPOSE
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (j > i) {
                let temp = matrix[i][j];

                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }
    }

    // NOW WE REVERSE EVERY ROW TO EFFECTIVELY ACHIEVE THE ROTATED MATRIX
    for (let i = 0; i < matrix.length; i++) {
        matrix[i].reverse();
    }

    return matrix;
};

console.log(rotate([[1, 2], [3, 4]]));