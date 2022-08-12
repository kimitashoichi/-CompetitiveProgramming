// https://atcoder.jp/contests/abc114/tasks/abc114_a

function questionOne (X: number) {
  const TARGET_AGES = [7, 5, 3];
  const judge = TARGET_AGES.some((age) => age === X);
  console.log(judge ? 'YES' : 'NO');
}

questionOne(5); // YES
questionOne(6); // NO
