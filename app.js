module.exports = {
    printMatrix: function (mat) {
        let result = "";

        for (let row = 0; row < mat.length; row++) {
            for (let col = 0; col < mat[row].length; col++) {
                result += mat[row][col] + (col === mat[row].length - 1 ? '' : ' ');
            }
            result += (row === mat.length - 1 ? '' : '\n');
        }
        console.log(result);
    },



    productOfMatrices: function (mat1, mat2) {
        let product = [
            [], []
        ];
        product[0][0] = (mat1[0][0] + "*" + mat2[0][0] + " + " + mat1[0][1] + "*" + mat2[1][0]);
        product[0][1] = (mat1[0][0] + "*" + mat2[0][1] + " + " + mat1[0][1] + "*" + mat2[1][1]);
        product[1][0] = (mat1[1][0] + "*" + mat2[0][0] + " + " + mat1[1][1] + "*" + mat2[1][0]);
        product[1][1] = (mat1[1][0] + "*" + mat2[1][1] + " + " + mat1[1][1] + "*" + mat2[1][1]);
        this.printMatrix(product);
    },



    SumOfMatrices: function (mat1, mat2) {
        let sum = [
            [], []
        ];
        for (let i = 0; i < mat1.length; i++) {
            for (let j = 0; j < mat1[i].length; j++) {
                sum[i][j] = (mat1[i][j] + " + " + mat2[i][j]);
            }
        } console.log(sum);
        this.printMatrix(sum);
    },

    SumOfArray: function (arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += +arr[i];
        }
        return sum;
    },
    
    SumOfEachRow: function (mat) {
        let sum = [];
        for (let j = 0; j < mat.length; j++) {
            {
                sum.push(this.SumOfArray(mat[j]));
            }
        }
        console.log(sum);
    }
}