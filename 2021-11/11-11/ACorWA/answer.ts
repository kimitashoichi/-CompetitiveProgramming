// 問題URL
// https://atcoder.jp/contests/abc152/tasks/abc152_a

function aCorWA(N: number, M: number) {
  if (N === M) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}

aCorWA(3, 3); // Yes
aCorWA(3, 2); // No
aCorWA(1, 1); // Yes