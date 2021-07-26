// 問題URL
// https://atcoder.jp/contests/abc191/tasks/abc191_b

function removeIt(X: number, A: number[]) {
  // filter関数で与えられた引数X以外の数字の配列を作成
  const clearConditionArray = A.filter((val: number) => {
    if (val !== X) {
      return val;
    }
  });

  // 出力条件に沿ったものに変更 ⇨ 空白区切り
  const answer = clearConditionArray.join(' ');

  console.log(answer);
}

removeIt(5, [3, 5, 6, 5, 4]); // 3 6 4
removeIt(3, [3,3,3]) // 出力なし