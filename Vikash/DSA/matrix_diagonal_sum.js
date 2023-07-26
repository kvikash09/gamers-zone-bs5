var diagonalSum = function (mat) {
  let sum = 0,
    x = 0,
    y = mat.length - 1;
  for (i = 0; i < mat.length; i++) {
    if (x == y) {
      sum += mat[i][x];
    } else {
      sum += mat[i][x] + mat[i][y];
    }
    x++;
    y--;
  }
  return sum;
};

console.log(
  diagonalSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
