// 問題URL
// https://atcoder.jp/contests/abc199/tasks/abc199_a

function squareInequality(A: number, B: number, C: number) {
  if(A ** 2 + B ** 2 < C ** 2) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

squareInequality(2, 2, 4) //YES
squareInequality(10, 10, 10) // NO
squareInequality(3, 4, 5) // NO