const Matrix = require('./matrix');

const matrix = new Matrix(5, 5);

console.log('--------- INITIAL MATRIX ---------');
console.log(matrix.printMatrix());
console.log('------- MATRIX WITH NEW ROW ------');
matrix.addRow();
console.log(matrix.printMatrix());
console.log('------- MATRIX WITH NEW ROW REMOVED ------');
matrix.removeRow();
console.log(matrix.printMatrix());
console.log('------- MATRIX WITH NEW COLUMN ------');
matrix.addColumn();
console.log(matrix.printMatrix());
console.log('------- MATRIX WITH NEW COLUMN REMOVED ------');
matrix.removeColumn();
console.log(matrix.printMatrix());
console.log('------- MATRIX WITH FIRST COL SORTED ------');
matrix.sortColumn(1);
console.log(matrix.printMatrix());