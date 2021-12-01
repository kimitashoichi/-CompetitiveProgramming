// 問題URL
// https://atcoder.jp/contests/abc188/tasks/abc188_b

function orthogonality(N: number, A: number[], B: number[]) {
  // for文で同じindex番号の各要素を掛け合わせたものを変数に足していく
  // 全て終了した時点でその変数が０かどうかを判定して答えを出力

  let total = 0;
  const xAxisVector = A;
  const yAxisVector = B;
  const vectorLength = N;

  for (let i = 0; i < vectorLength; i++) {
    total += xAxisVector[i] * yAxisVector[i]
  }

  if (total === 0) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}


orthogonality(2, [-3, 6], [4, 2]); // Yes
orthogonality(2, [4, 5], [-1, -3]) // No
orthogonality(3, [1, 3, 5], [3, -6, 3]) //Yes