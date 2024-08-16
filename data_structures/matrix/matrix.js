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
- Print the Matrix
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
        this.matrix = new Array(rows).fill(null).map(() => new Array(columns).fill(null).map(() => Math.floor(Math.random() * 10)));
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

    // METHOD TO ADD A ROW
    addRow() {
        // STEP 1: Create a new matrix that will copy everything from the existing matrix
        const newMatrix = new Array(this.matrix.length + 1).fill(null).map(() => new Array(this.matrix[0].length).fill(null));

        // STEP 2: Fill the new Matrix with the information from the old matrix and populate the new Row
        for (let i = 0; i < newMatrix.length; i++) {
            for (let j = 0; j < newMatrix[i].length; j++) {
                // CHECK IF WE'VE ARRIVED AT THE NEW ROW
                if (i === newMatrix.length - 1) {
                    newMatrix[i][j] = Math.floor(Math.random() * 10);
                } else {
                    newMatrix[i][j] = this.matrix[i][j];
                }
            }
        }
        // STEP 3: Assign the new matrix to this.matrix
        this.matrix = newMatrix;
    }

    // METHOD TO REMOVE A ROW
    removeRow() {
        // STEP 1: Create a new Matrix that will copy everything from the existing matrix
        const newMatrix = new Array(this.matrix.length - 1).fill(null).map(() => new Array(this.matrix[0].length).fill(null));

        // STEP 2: Fill new Matrix with the information from the old matrix without the last row
        for (let i = 0; i < newMatrix.length; i++) {
            for (let j = 0; j < newMatrix[i].length; j++) {
                newMatrix[i][j] = this.matrix[i][j];
            }
        }
        // STEP 3: Assign the new matrix to this.matrix
        this.matrix = newMatrix;
    }

    // ADD A COLUMN
    addColumn() {
        // STEP 1: Create a new Matrix that will now have a new column
        const newMatrix = new Array(this.matrix.length).fill(null).map(() => new Array(this.matrix[0].length + 1).fill(null));

        // STEP 2: Fill the new matrix will everything that is in the current matrix and then add a new random number in the last (new) column
        for (let i = 0; i < newMatrix.length; i++) {
            for (let j = 0; j < newMatrix[i].length; j++) {
                // CHECK IF WE ARE AT THE LAST ROW IN THE COLUMN
                if (j === newMatrix[i].length - 1) {
                    newMatrix[i][j] = Math.floor(Math.random() * 10);
                } else {
                    newMatrix[i][j] = this.matrix[i][j];
                }
            }
        }
        // STEP 3: Assign the new matrix to this.matrix
        this.matrix = newMatrix;
    }

    // REMOVE COLUMN
    removeColumn() {
        // STEP 1: Create a new matrix that will not include the last column
        const newMatrix = new Array(this.matrix.length).fill(null).map(() => new Array(this.matrix[0].length - 1).fill(null));

        // STEP 2: Fill the new matrix with everything that is in the current matrix not including the last column
        for (let i = 0; i < newMatrix.length; i++) {
            for (let j = 0; j < newMatrix[i].length; j++) {
                newMatrix[i][j] = this.matrix[i][j];
            }
        }
        // STEP 3: Assign the new matrix to this.matrix
        this.matrix = newMatrix;
    }

    // SORT A COLUMN
    // **** METHOD WILL ACCEPT AN ARGUMENT, IT WILL BE THE COLUMN NUMBER **NOT** THE COLUMN INDEX
    // EX: IF YOU PASS IN 1, MEANING SORT THE FIRST COLUMN, THE FIRST COLUMN WILL BE AT INDEX 0
    sortColumn(colNumber) {
        const indexOfColumn = colNumber - 1;

        // STEP 1: Iterate over the rows and get the number at the given column and add it to the array
        const nums = [];

        for (let i = 0; i < this.matrix.length; i++) {
            nums.push(this.matrix[i][indexOfColumn]);
        }

        // STEP 2: Sort the numbers in the nums array
        // TO SORT, WITHOUT USING THE BUILT sort() ARRAY METHOD, WE CAN USE A SIMPLE BUBBLE SORT ALGORITHM
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                let firstNum = nums[i];
                let secondNum = nums[j];

                if (firstNum > secondNum) {
                    nums[i] = secondNum;
                    nums[j] = firstNum;
                }
            }
        }

        // STEP 3: Now that the numbers have been sorted, we need to insert them back into the matrix, in order
        for (let i = 0; i < this.matrix.length; i++) {
            this.matrix[i][indexOfColumn] = nums[i];
        }
    }
}

module.exports = Matrix;