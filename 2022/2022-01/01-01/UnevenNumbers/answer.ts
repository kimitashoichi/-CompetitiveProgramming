// 問題URL
// https://atcoder.jp/contests/abc136/tasks/abc136_b


// 桁数が奇数になる整数値の個数を出力する
// 1桁、３桁、５桁...の通りに増えていく

function unevenNumbers(N: number) {
  const numberOfDigits = N.toString().length;
  const target = N;
  let ans = 0;

  for (let i = 1; i <= numberOfDigits; i++) {
    if (i % 2 !== 0) {
      let add = (10 ** i) - 1;
      if (N >= (10 ** i)) {
        ans += add;
      } else {
        let addOther = target - (10 ** (i - 1)) + 1;
        ans += addOther;
      }
    }
  }

  console.log(ans);
}

unevenNumbers(11); // 9
unevenNumbers(136); // 46
