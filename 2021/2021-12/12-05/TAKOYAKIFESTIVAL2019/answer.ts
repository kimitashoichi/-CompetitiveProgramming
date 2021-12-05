// 問題URL
// https://atcoder.jp/contests/abc143/tasks/abc143_b


//「順番を考慮しない 2 要素の選び方」を全探索する際のポイントとして、
// 内側のループ変数の始点を外側のループ変数 +1 から始める
function festival(N: number, d: number[]) {
  let total: number[] = [];
  const lenght = d.length;

  for (let i = 0; i < lenght; i++) {
    for (let k = i + 1; k < lenght; k++) {
      total.push(d[i] * d[k]);
    }
  }

  const answer = total.reduce((total, current) => total + current);
  console.log(answer);
}

festival(3, [3, 1, 2]); // 11
festival(7, [5, 0, 7, 8, 3, 3, 2]); // 312