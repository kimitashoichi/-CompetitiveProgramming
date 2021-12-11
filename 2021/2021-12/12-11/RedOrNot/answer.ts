// 問題URL
// https://atcoder.jp/contests/abc138/tasks/abc138_a

function redOrNot(a: number, s: string) {
  console.log(a >= 3200 ? s : 'red');
}

redOrNot(3200, 'pink'); // pink
redOrNot(3199, 'pink'); // red
redOrNot(4049, 'red'); // red