// 問題URL
// https://atcoder.jp/contests/abc134/tasks/abc134_b

// N:木の本数
// D:監視員が監視できる幅（+-どちらの方向にも監視可能）

function goldenApple(N: number, D: number) {
  const monitoringRange = (D * 2) + 1
  let ans = 0;
  let range = 0;

  for (let i = 0; i <= N; i++) {
    if (range < N) {
      range += monitoringRange;
      ans++;
    } else {
      break;
    }
  }
  console.log(ans);
}

goldenApple(6, 2); // 2
goldenApple(14, 3); // 2
goldenApple(20, 4); // 3

// 1 2 3 4 5 6 7 8 9 10 11 12 13 14
// |     N     |         N        |