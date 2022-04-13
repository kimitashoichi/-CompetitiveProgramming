// 問題URL
// https://atcoder.jp/contests/abc127/tasks/abc127_b

function algae (r: number, D: number, x: number) {
  let answers: number[] = [];
  const target = (beforeLenght: number) => {
    return r * beforeLenght - D;
  };

  // 最初の要素を追加
  answers.push(target(x));

  for (let i = 0; answers.length < 10; i++) {
    let beforeLenght = answers[i];
    answers.push(target(beforeLenght));
  }

  console.log(answers);
}

algae(2, 10, 20);