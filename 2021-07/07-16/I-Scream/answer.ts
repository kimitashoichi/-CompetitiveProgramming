// 問題URL
// https://atcoder.jp/contests/abc194/tasks/abc194_a

function iScream(A: number, B: number) {
  const nonFatMilkSolids = A;
  const milkFat = B;
  const total = nonFatMilkSolids + milkFat;

  if (total >= 15) {
    console.log(1);
  } else if (total >= 10 && total < 15) {
    console.log(2)
  } else if (total >= 3 && total < 10) {
    console.log(3)
  } else {
    console.log(4)
  }
}

iScream(10, 8) // 1
iScream(1, 2) // 3
iScream(0, 0) // 4