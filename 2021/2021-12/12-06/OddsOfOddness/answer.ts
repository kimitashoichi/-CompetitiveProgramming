// 問題URL
// https://atcoder.jp/contests/abc142/tasks/abc142_a

function oddsOfOddness(N: number) {
  const total = Number(N.toFixed(6));
  let target: number[] = [];

  for (let i = 1; i <= N; i++) {
    if (i % 2 !== 0) {
      target.push(i);
    }
  }

  const ans = Number(target.length.toFixed(6)) / total;
  console.log(Number(ans.toFixed(6)));
}

oddsOfOddness(4); // 0.5000000000
oddsOfOddness(5); // 0.6000000000
oddsOfOddness(1); // 1.0000000000