// 問題URL
// https://atcoder.jp/contests/abc184/tasks/abc184_b

function quizzes(N: number, X: number, answers: string) {
  const answerHistory = answers.split('');
  const MIN_SCORE = 0;
  let score = X;

  for (let i = 0; i < N; i++) {
    // 回答に対するスコアの変動
    if (answerHistory[i] === 'x') {
      score -= 1;
    } else if (answerHistory[i] === 'o') {
      score += 1;
    }

    // scoreが0点以下になった場合の処理
    if (score < MIN_SCORE) {
      score = 0;
    }
  }

  console.log(score);
}

quizzes(3, 0, 'xox'); // 0
quizzes(20, 199999, 'oooooooooxoooooooooo'); // 200017
quizzes(20, 10, 'xxxxxxxxxxxxxxxxxxxx'); // 0