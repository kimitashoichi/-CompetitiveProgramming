// 問題URL
// https://atcoder.jp/contests/abc200/tasks/abc200_a

function century(N: number) {
  let years = N;
  let century = 0;
  const centuryNumber = 100;

  if (years % centuryNumber === 0) {
    century = years / centuryNumber;
  } else {
    century = Math.floor(years / centuryNumber) + 1;
  }

  console.log(century);
}

century(2021) // 21
century(200) // 2

// 100で割った値の整数部分を世紀とする
// 余が0の場合は整数部分が世紀になる
// 余が0より大きければ整数部分プラス１が世紀になる