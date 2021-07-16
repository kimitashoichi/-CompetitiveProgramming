// 問題URL
// https://atcoder.jp/contests/abc194/tasks/abc194_b

function jobAssignment(N: number, A: number[], B: number[]) {
  let aMinimun = Math.min(...A);
  let bMinumun = Math.min(...B);

  let aIndex = A.indexOf(aMinimun);
  let bIndex = B.indexOf(bMinumun);

  if (aIndex === bIndex) {
    if (aMinimun === bMinumun) {
      let aTwo = A.sort(function asc(a,b) {return a - b})[1];
      let bTwo = B.sort(function asc(a,b) {return a - b})[1];
      let secondMinumun = aTwo > bTwo ? bTwo : aTwo;
      console.log(secondMinumun);
    } else {
      console.log(aMinimun + bMinumun);
    }
  }
}

jobAssignment(3, [8,4,7], [5,4,9]) // 5
jobAssignment(3, [11,3,6], [7,2,7])  // 5 ? 4


// AとBの最小値を求める
// 各配列から検索しindex番号が被っていないかを確かめる
// 被っていなければABの最小値を出力
// 被っていた場合はABの和を出力