// 【問題概要】
// N 枚のカードがあり、i 枚目のカードには ai という数が書かれています。
// Alice と Bob はこれらのカードを使ってゲームを行います。ゲームでは 2 人が交互に 1 枚ずつカードを取っていきます。Alice が先にカードを取ります。
// 2 人がすべてのカードを取ったときゲームは終了し、取ったカードの数の合計がその人の得点になります。2 人とも自分の得点を最大化するように最適戦略をとったとき、Alice は Bob より何点多くの得点を獲得できるかを求めてください。

// 【制約】
// N は 1 以上 100 以下の整数
// ai は 1 以上 100 以下の整数
// 【数値例】
// 1)
// N=3
// a=(2,7,4)
// 答え: 5
// 以下が最適です:
// 1 ターン目: Alice が 7 を取る
// 2 ターン目: Bob が 4 を取る
// 3 ターン目: Alice が 2 を取る
// Alice は 7 + 2 = 9 点、Bob は 4 点を獲得するので、その差は 9 - 4 = 5 点です。
// 問題URL
// https://atcoder.jp/contests/abc088/tasks/abc088_b

function calculateDifferenceInPoints(N: number, cards: number[]): number {
  let aliceScore = 0;
  let bobScore = 0;
  let turn = true;

  function desc(a: number, b: number) {
    return a - b;
  }
  cards.sort(desc)

  for (let i = 0; i < N; i++) {
    if (turn) {
      aliceScore += cards[i];
      turn = !turn;
    } else {
      bobScore += cards[i];
      turn = !turn;
    }
  }

  console.log(aliceScore - bobScore);
  return aliceScore - bobScore;
}

calculateDifferenceInPoints(3, [2,7,4]);