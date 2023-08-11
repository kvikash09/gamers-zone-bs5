    // let mat =[[1,2,3],
    //           [4,5,6],
    //           [7,8,9]]

//     Input: mat = [[1,1,1,1],
//               [1,1,1,1],
//               [1,1,1,1],
//               [1,1,1,1]]
// Output: 8

// Input: mat = [[5]]
// Output: 5

                var diagonalSum = function(mat) {
                    let length = mat.length -1;
                    sum= 0;
                    for(let i=0;i<mat.length;i++){
                        sum += mat[i][i] + mat[i][length - i];
                    }
                    if (length % 2 === 0) sum -= mat [length/2][length/2]
                    return sum;
                };
