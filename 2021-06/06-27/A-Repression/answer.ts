// 問題URL
// https://atcoder.jp/contests/abc207/tasks/abc207_a

function answerFunc(cards:number[]) {
  let sortedCards = cards.sort(function desc(a, b) {
    return b - a;
  });
  let answer = sortedCards[0] + sortedCards[1];
  console.log(answer);
}

answerFunc([3, 4, 5]); // 9
answerFunc([6, 6, 6]); // 12
answerFunc([99, 99, 98]); // 198