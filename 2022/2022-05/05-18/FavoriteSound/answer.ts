// https://atcoder.jp/contests/abc120/tasks/abc120_a

function favoriteSound (A: number, B: number, C: number) {
  let answer =0;
  const total = ~~(B / A);
  if (total > C) {
    console.log(C);
  } else {
    console.log(total);
  }
}

favoriteSound(2, 11, 4); // 4
favoriteSound(3, 9, 5); // 3
favoriteSound(100, 1, 10); // 0