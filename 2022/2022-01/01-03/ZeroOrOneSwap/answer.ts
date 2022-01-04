// 問題URL
// https://atcoder.jp/contests/abc135/tasks/abc135_b

// 引数で受け取った数値の配列と、昇順に並べ替えた数値の配列を比較する
// インデックス番号で比較して、異なる要素が２つ以下だった場合、並び替え可能、それ以外だったら不可能

function zeroOrOneSwap(N: number, p: number[]) {
  const asc = (a: number, b: number) => {return a - b;};
  const original = p;
  const sortByAsc = original.slice().sort(asc);

  const diff = original.filter((val, index) => {
    return val !== sortByAsc[index];
  });

  if (diff.length <= 2) {
    console.log('YES');
  } else {
    console.log('NO');
  }

}

zeroOrOneSwap(5, [5, 2, 3, 4, 1]); // YES
zeroOrOneSwap(5, [2, 4, 3, 5, 1]); // NO
zeroOrOneSwap(7, [1, 2, 3, 4, 5, 6, 7]); // YES