// 問題URL
// https://atcoder.jp/contests/abc201/tasks/abc201_a

function tinyArithmeticSequence(A: number[]) {
  const sortedNumbers = A.sort();
  const beforeTwoNumbers = sortedNumbers[1] - sortedNumbers[0];
  const afterTwoNumbers = sortedNumbers[2] - sortedNumbers[1];

  if (beforeTwoNumbers === afterTwoNumbers) {
    console.log("YES");
    return;
  } else if (sortedNumbers.every((v) => v === sortedNumbers[0])) {
    console.log("YES");
    return;
  } else {
    console.log("NO");
    return;
  }
}

tinyArithmeticSequence([5, 1, 3]); // YES
tinyArithmeticSequence([1, 4, 3]) // NO
tinyArithmeticSequence([5, 5, 5]) // YES

// 数列を昇順でソートした後にA3−A2=A2−A1が成り立つかどうかを判定する
// 全ての要素が同じ場合の判定は特別に設ける