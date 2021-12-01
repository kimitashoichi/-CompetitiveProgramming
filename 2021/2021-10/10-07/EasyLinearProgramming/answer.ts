// 問題URL
// https://atcoder.jp/contests/abc167/tasks/abc167_b

function easyLinearProgramming(A: number, B: number, C: number, K: number) {
  let answer = 0;
  let limit = K;
  const cards = [A, B, C];
  const scores = [1, 0, -1];

  const loopForCards = (value: number, cards: number) => {
    for (let i = 0; i < cards; i++) {
      limit -= 1;
      if (limit === 0) {
        answer += value;
        console.log(answer);
        break;
      }
      answer += value;
    }
  };

  for (let j = 0; j < cards.length; j++) {
    loopForCards(scores[j], cards[j]);
    if (limit <= 0) {
      break;
    }
  }
}

easyLinearProgramming(2, 1, 1, 3); // 2
easyLinearProgramming(1, 2, 3, 4); // 0
easyLinearProgramming(2000000000, 0, 0, 2000000000); // 2000000000