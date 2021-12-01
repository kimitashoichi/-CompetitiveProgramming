// 問題URL
// https://atcoder.jp/contests/abc176/tasks/abc176_b

function multipleOfNine(N: number) {
  const NINE = 9;
  const ans = N % NINE;
  if (ans === 0) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}

multipleOfNine(123456789); // Yes
multipleOfNine(31415926535897932384626433832795028841971693993751058209749445923078164062862089986280) // No

