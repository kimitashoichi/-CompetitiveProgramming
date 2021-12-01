// 問題URL
// https://atcoder.jp/contests/abc191/tasks/abc191_a

function vanishingPitch(V: number, T: number, S: number, D: number) {
  // ボールが消える範囲を計算
  const startDistance = V * T;
  const endDistance = V * S;

  // 消える範囲外（両端を含む）に引数Dが存在するかどうかの判定
  if (D < startDistance || endDistance < D) {
    console.log('Yes');
    return;
  } else {
    console.log('No');
    return;
  }
}

vanishingPitch(10, 3, 5, 20); // Yes
vanishingPitch(10, 3, 5, 30); // No