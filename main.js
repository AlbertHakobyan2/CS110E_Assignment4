const assignment4 = require('./Ass4.1.js');
const matrix1 = [
    ['a1', 'a2'],
    ['a3', 'a4']
];

const matrix2 = [
    ['b1', 'b2'],
    ['b3', 'b4']
];

const matrix3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

assignment4.printMatrix(matrix1);
console.log("\n");
assignment4.printMatrix(matrix2);
console.log("\n");
assignment4.SumOfMatrices(matrix1, matrix2);
console.log("\n");
assignment4.productOfMatrices(matrix1, matrix2);
console.log("\n");
assignment4.SumOfEachRow(matrix3);
