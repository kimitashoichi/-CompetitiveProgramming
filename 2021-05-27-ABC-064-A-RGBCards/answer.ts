// 問題URL
// https://atcoder.jp/contests/abc064/tasks/abc064_a

function judgeMultipleOfFour (cards: number[]) {
  let changeNumber: string[] = cards.map((val) => {
    return val.toString();
  })

  const judgeNumber = Number(changeNumber.join(""))

  if (judgeNumber % 4 === 0) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

judgeMultipleOfFour([4, 3, 2]);
judgeMultipleOfFour([2, 3, 4]);
