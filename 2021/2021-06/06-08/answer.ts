// 問題URL
// https://atcoder.jp/contests/abc113/tasks/abc113_b



function determiningLocation(N: number, T: number, A: number, H: number[]): void {
  const celsiusConstant = 0.006;
  let dgrees = [];

  // 順当に計算
  for(let i = 0; i < H.length; i++) {
    dgrees.push(
      T - (H[i] * celsiusConstant)
    )
  }

  // 配列の中の最小値を検索するための関数
  function SearchMin(a, b) {
    return Math.min(a, b);
  }

  // 目標温度のと絶対値の差を保存
  let newDgrees = dgrees.map(val => Math.abs(val - A));

  // 最小値を検索
  const anserValue = newDgrees.reduce(SearchMin);

  // 検索した最小値のindex番号を取得し、答えになるように+1をする
  const answer = newDgrees.findIndex(val => val === anserValue) + 1;
  console.log(answer);

}

determiningLocation(2, 12, 5, [1000, 2000]); // 1
determiningLocation(3, 21, -11, [81234, 94124, 52141]) // 3