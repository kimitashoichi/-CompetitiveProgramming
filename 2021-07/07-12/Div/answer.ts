// 問題URL
// https://atcoder.jp/contests/abc198/tasks/abc198_a

function div(N: number) {
  if (N <= 1) {
    console.log(0);
    return;
  }

  console.log(N - 1);
}

div(2) // 1
div(1) // 0
div(3) // 2