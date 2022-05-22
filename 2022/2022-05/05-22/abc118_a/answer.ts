// https://atcoder.jp/contests/abc118/tasks/abc118_a

function answer (A: number, B: number) {
  if (B % A === 0) {
    console.log(A+B);
  } else {
    console.log(B-A);
  }
}

answer(4, 12); // 16
answer(8, 20); // 12
answer(1, 1); // 2 