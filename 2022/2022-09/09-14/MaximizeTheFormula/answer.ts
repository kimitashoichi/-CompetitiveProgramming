// https://atcoder.jp/contests/abc110/tasks/abc110_a

function maximizeTheFormula (A: number, B: number, C: number) {
  const newArr = [A, B, C].sort((a, b) => {
    return b - a;
  }).map((value) => value.toString());
  const answer = Number(newArr[0] + newArr[1]) + Number(newArr[2]);
  console.log(answer);
}

maximizeTheFormula(1, 5, 2); // 53
maximizeTheFormula(9, 9, 9); // 108
maximizeTheFormula(6, 6, 7); // 82