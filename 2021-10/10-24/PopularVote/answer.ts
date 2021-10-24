// 問題URL
// https://atcoder.jp/contests/abc161/tasks/abc161_b

function popularVote (N: number, M: number, A: number[]) {
  const allVoted = A.reduce((total, current) => total + current);
  const persent = 1 / (4 * M);
  const minVote = persent * allVoted;
  const sortedNumbers = A.sort(function (a, b) {
    return b - a;
  });

  let flag = true;

  for (let i = 0; i < M; i++) {
    if (minVote > sortedNumbers[i]) {
      flag = false;
    }
  }

  console.log(flag ? 'Yes' : 'No');
}

popularVote(4, 1, [5, 4, 2, 1]); // Yes
popularVote(3, 2, [380, 19, 1]); // No
popularVote(12, 3, [4, 56, 78, 901, 2, 345, 67, 890, 123, 45, 6, 789]); // Yes