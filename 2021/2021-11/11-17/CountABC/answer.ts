// 問題URL
// https://atcoder.jp/contests/abc150/tasks/abc150_b

function countABC(N: number, S: string) {
  const searchStr = 'ABC';
  let targetString = S;
  let count = 0;

  for (let i = 0; i <= N; i++) {
    if (targetString.indexOf(searchStr) !== -1) {
      targetString = targetString.replace(searchStr, '');
      count++;
    } else {
      break;
    }
  }

  console.log(count);
}

countABC(10, 'ZABCDBABCQ'); // 2
countABC(19, 'THREEONEFOURONEFIVE'); // 0
countABC(33, 'ABCCABCBABCCABACBCBBABCBCBCBCABCB'); // 5

// 文字列検索(indexOf)
// 検索文字列が存在したらreplaceでから文字列にする
// カウントを増やす
// 上記を繰り返す