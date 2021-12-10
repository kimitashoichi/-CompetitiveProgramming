// 問題URL
// https://atcoder.jp/contests/abc139/tasks/abc139_b

function powerSocket(A: number, B: number) {
  let total = 1;
  let ans = 0;
  const puls = A;
  const goal = B;

  while (total <= goal) {
    ans++;
    total += puls - 1;
    if (total >= goal) break;
  }

  console.log(ans)
}

powerSocket(4, 10); // 3
powerSocket(8, 9); // 2
powerSocket(8, 8); // 1