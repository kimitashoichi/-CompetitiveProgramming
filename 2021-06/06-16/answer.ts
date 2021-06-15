// 問題URL
// https://atcoder.jp/contests/abc144/tasks/abc144_b

function judgmentOfMultiplication(N: number): void {
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      if (i * j === N) {
        console.log("YES");
        return;
      } else if (i * j === 81) {
        console.log("NO");
        return;
      }
    }
  }
}

judgmentOfMultiplication(10); // YES
judgmentOfMultiplication(50); // NO
judgmentOfMultiplication(81); // YES