// 問題URL
// https://atcoder.jp/contests/abc130/tasks/abc130_b

function bounding(N: number, X: number, L: number[]) {
  let coordinates = [0];
  for (let i = 0; i < L.length; i++) {
    const bound = coordinates[i] + L[i];
    coordinates.push(bound);
  }

  const answers = coordinates.filter(value => value <= X);
  console.log(answers.length);
}

bounding(3, 6, [3, 4, 5]); // 2
bounding(4, 9, [3, 3, 3, 3]); // 4