// LeetCode Problem 54. Spiral Matrix

var spiralOrder = function (matrix) {
    const spiralArray = [];

    while (matrix.length) {
        // STEP 1: Extract the first row
        // we will push the first row to spiralArray and remove it from the matrix at the same time
        spiralArray.push(...matrix.shift());

        // STEP 2: Extract the last column
        // we will push the last column to spiralArray and remove it from the matrix at the same time
        for (let i = 0; i < matrix.length; i++) {
            if (matrix[i].length) {
                spiralArray.push(matrix[i].pop());
            }
        }

        // STEP 3: Extract the last row (in reverse order)
        // We will push the last row to spiralArray and remove it from the matrix at the same time
        if (matrix.length) {
            spiralArray.push(...matrix.pop().reverse());
        }

        // STEP 4: Extract the first column (from bottom to top)
        // we will push the elements from the first column to spiralArray and remove them from the matrix at the same time
        for (let i = matrix.length - 1; i >= 0; i--) {
            if (matrix[i].length) {
                spiralArray.push(matrix[i].shift());
            }
        }
    }

    return spiralArray;
};


console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16], [17, 18, 19, 20], [21, 22, 23, 24]]))