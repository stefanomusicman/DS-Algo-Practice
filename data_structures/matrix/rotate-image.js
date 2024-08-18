// LeetCode Problem 48. Rotate Image
// Must modify the matrix *** IN PLACE *** 
// NO ADDITONAL SPACE 

/*

STRATEGY:

- FIRST TRANSPOSE:
    - DETERMINE THE DIAGONAL LINE
    - THE DIAGONAL LINE IS BASICALLY WHEN J === I (IN OTHER WORDS, WHEN THE ROW NUMBER IS THE SAME AS THE COLUMN NUMBER)
    - WHEN THE COLUMN NUMBER IS GREATER THAN THE ROW NUMBER, IT MEANS YOU ARE ON AN ELEMENT THAT IS ABOVE THE DIAGONAL LINE
    - WHEN THE COLUMN NUMBER IS LESS THAN THE ROW NUMBER, IT MEANS YOU ARE ON AN ELEMENT THAT IS BELOW THE DIAGONAL LINE 
    - YOU WANT TO SWAP EVERYTHING WHEN J > I (WHEN THE COLUMN NUMBER (J) IS GREATER THAN THE ROW NUMBER(I))
    - SWAP (0,1) WITH (1,0)

- LASTLY, SINCE WE NEED TO ROTATE THE IMAGE, WE JUST ITERATE THROUGH THE TRANSPOSED MATRIX AND REVERSE EVERY ROW

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