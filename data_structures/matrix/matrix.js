/*

A matrix is essentially just a 2 dimensional array...an array made of arrays

Like in math, in order for a matrix to be a valid, all rows must be of the same length, so basically all of the 
arrays inside of the main array must all have the same length.

The length of the main array represents the number of rows
The length of the inner arrays represent the number of columns

here is a simple visual representation

const matrix1 = [[1,2,3], [4,5,6], [7,8,9]];

As shown above, this does not look like a matrix however if we stack the array in order, it will look like a matrix
seen in math

const matrix1 = 
[
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

Now that looks like a matrix!

if we were to iterate over this, you would basically need 2 loops, the outer loop to iterate over main array
or in other words, to iterate over the rows, and the inner loop to iterate over the inner arrays or in other words,
to iterate over the columns

Basic Matrix opertaions

- create a new Matrix
- Add a Row
- Remove a Row
- Add a Column
- Remove a Column
- Sort a Column

in the class below, we must create methods to perform each of the actions

*** DO NOT USE ANY BUILT-IN METHODS (SORT)

*/

class Matrix {
    constructor(rows, columns) {
        this.matrix = new Array(rows).fill(null).map(() => new Array(columns).fill(Math.floor(Math.random() * 10)));
    }

    // METHOD TO PRINT THE MATRIX
    printMatrix() {
        let printedMatrix = '';

        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                printedMatrix += this.matrix[i][j];
                if (j === this.matrix[i].length - 1) {
                    printedMatrix += '\n';
                } else {
                    printedMatrix += ' '; // Optional: Add space between elements
                }
            }
        }

        return printedMatrix;
    }
}

module.exports = Matrix;