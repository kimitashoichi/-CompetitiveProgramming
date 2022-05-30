// https://atcoder.jp/contests/abc117/tasks/abc117_b

function polygon (N: number, Lines: number[]) {
  // 最大値の取得
  const max = Math.max(...Lines);

  // 最大値のidenx番号を取得
  const delIndex = Lines.indexOf(max);

  // 最大値を削除した配列を作成
  Lines.splice(delIndex, 1);

  // 最大値以外の値を合計
  const total = Lines.reduce((current, total) => total + current);

  if (max < total) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}

polygon(4, [3, 8, 5, 1]); // Yes
polygon(4, [3, 8, 4, 1]); // No
polygon(10, [1, 8, 10, 5, 8, 12, 34, 100, 11, 3]); // No

