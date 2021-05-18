// 【問題概要】
// 0 と 1 のみから成る 3 桁の番号 s が与えられます。1 が何個含まれるかを求めてください。
// 【数値例】
// 1)
// s = "101"
// 答え: 2
// '1' が 2 個含まれています。
// 問題URL
// https://atcoder.jp/contests/abc081/tasks/abc081_a

// for文を使用する場合
function countZero(arg: number): number {
  const target = arg.toString().split("");
  let answer = 0;

  for (let i = 0; i < target.length; i++) {
    if (target[i] === "1") {
      answer++
    }
  }

  console.log(answer);
  return answer;
}

// for文を使用しない場合
function countZeroAnotherPattern(arg: number): number {
  const target = arg.toString().split("");
  let answer = 0;
  if(target[0] === "1") answer++
  if(target[1] === "1") answer++
  if(target[2] === "1") answer++

  console.log(answer);
  return answer;
}

countZero(101);
countZeroAnotherPattern(100);