// 問題URL
// https://atcoder.jp/contests/abc133/tasks/abc133_b

// 全ての座標の組み合わせの距離を算出
// 整数かどうか判定
// 整数になる組の数を出力


// 組み合わせの確認方法
// 1, インデックス番号が同じ時は目的の配列に追加しない
// 2, 目的の配列の中に追加しようとしている要素がある場合は追加しない

function goodDistance(N: number, D: number, X: number[][]) {
  let ans = 0;
  let all = [];

  const compare = (i: number, source: number[][][] , target: number[][]): boolean => {
    if (!source[i]) return;
    let compareArray = [source[i][1], source[i][0]];
    if ((source[i][0] === target[0] && source[i][1] === target[1])
    || (compareArray[0] === target[0] && compareArray[1] === target[1])) {
      return true;
    } else {
      return false;
    }
  }

  for (let i = 0; i < X.length; i++) {
    for (let k = 1; k < X.length; k++) {
      if (i !== k && !compare(i, all, [X[i], X[k]])) {        
        all.push([X[i], X[k]]);
      }
    }
  }

  // ここまでで組み合わせが完成
  // 計算段階
  // 次元が1から10まであるのでそれに対応したものにする
  for (let i = 0; i < all.length; i++) {
    let x = (all[i][1][0] - all[i][0][0]) ** 2;
    let y = (all[i][1][1] - all[i][0][1]) ** 2;
    let sqrt = Math.sqrt(x + y);
    if (Number.isInteger(sqrt)) {
      ans++;
    }
  }

  console.log(ans);
}

const qestionOne = [
  [1, 2],
  [5, 5],
  [-2, 8]
];

goodDistance(3, 2, qestionOne); // 1