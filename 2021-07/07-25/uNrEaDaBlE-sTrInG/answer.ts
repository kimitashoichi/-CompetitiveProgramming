// 問題URL
// https://atcoder.jp/contests/abc192/tasks/abc192_b

function uNrEaDaBlEsTrInG(X: string) {
  // 定数
  const EVEN = 2;

  // 全て大文字かどうかの判定
  const judgeUpper = (str: string) => {
    return str === str.toUpperCase() ? true : false;
  }

  // 全て小文字かどうかの判定
  const judgeLower = (str: string) => {
    return str === str.toLowerCase() ? true : false;
  }

  // 引数を配列に変換
  const targetStrings = X.split('');

  // 配列の中の偶数番目を取り出す
  const evenStrings = targetStrings.filter((x: string, i: number) => {
    if (i % EVEN === 0) {
      return x;
    }
  })

  // 配列の中の奇数番目を取り出す
  const oddStrings = targetStrings.filter((x: string, i: number) => {
    if (i % EVEN !== 0) {
      return x;
    }
  })

  // 判定用関数の引数にするために配列を文字列に変換
  const oddString = oddStrings.join('');
  const evenString = evenStrings.join('');

  // 問題文の条件に当てはまるかどうかの判定
  if (judgeUpper(oddString) === true && judgeLower(evenString) === true) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}


uNrEaDaBlEsTrInG('dIfFiCuLt'); // Yes
uNrEaDaBlEsTrInG('eASY'); // NO
uNrEaDaBlEsTrInG('a'); // YES