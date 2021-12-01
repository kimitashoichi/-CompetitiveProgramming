// 問題URL
// https://atcoder.jp/contests/abc147/tasks/abc147_a

function blackjack(a: number, b: number, c: number) {
  const total = a + b + c;
  console.log(
    total >= 22 ? 'bust' : 'win'
  )
}

blackjack(5, 7, 9); // win