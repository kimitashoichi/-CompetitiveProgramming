// https://atcoder.jp/contests/abc109/tasks/abc109_a

function aBC333 (A: number, B: number) {
  const a = A % 2 !== 0;
  const b = B % 2 !== 0;
  console.log(a && b ? 'Yes' : 'No');
}

aBC333(3, 1); // Yes
aBC333(1, 2); // No
aBC333(2, 2); // No