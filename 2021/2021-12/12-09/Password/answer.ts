// 問題URL
// https://atcoder.jp/contests/abc140/tasks/abc140_a

function password(N: number) {
  if (N === 1) {
    console.log(1);
  } else {
    console.log(N**3);
  }
}

password(2); // 8
password(1); // 1