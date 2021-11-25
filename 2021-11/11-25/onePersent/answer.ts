// 問題URL
// https://atcoder.jp/contests/abc165/tasks/abc165_b

function onePersent(X: number) {
  let haveMoney = 100;
  const interest = 0.01;
  let year = 0;

  while (haveMoney <= X) {
    let plus = Math.floor(haveMoney * interest);
    console.log(plus);
    haveMoney += plus;
    year++;
  }

  console.log(year);
}

onePersent(103);  // 3
onePersent(1333333333); // 1706
