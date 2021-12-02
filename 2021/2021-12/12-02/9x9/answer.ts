// 問題URL
// https://atcoder.jp/contests/abc144/tasks/abc144_a

function nine(A: number, B: number) {
  if (A < 10 && B < 10) {
    console.log(A*B);
  } else {
    console.log(-1);
  }
}

nine(2, 5); // 10
nine(5, 10); // -1
nine(9, 9); // 81