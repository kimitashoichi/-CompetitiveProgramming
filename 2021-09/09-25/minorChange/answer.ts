// 問題URL
// https://atcoder.jp/contests/abc172/tasks/abc172_b

// S, Tの文字列配列を作成
// 同じインデックス番号の文字が異なる場合にカウントを増やす
// これを文字列の配列の数だけ繰り返す

function minorChange(S: string, T: string) {
  const sStrings = S.split('');
  const tStrings = T.split('');
  let answer = 0;

  for (let i = 0; i < sStrings.length; i++) {
    if (sStrings[i] !== tStrings[i]) {
      answer++;
    }
  }

  console.log(answer);
}

minorChange('cupofcoffee', 'cupofhottea'); // 4
minorChange('abcde', 'bcdea'); // 5
minorChange('apple', 'apple'); // 0