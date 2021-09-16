// 問題URL
// https://atcoder.jp/contests/abc177/tasks/abc177_a

function dontBeLate(D: number, T: number, S: number) {
  const movableDistance = T * S;
  if (D > movableDistance) {
    console.log('No');
  } else {
    console.log('Yes');
  }
}

dontBeLate(1000, 15, 80);
dontBeLate(2000, 20, 100);
dontBeLate(10000, 1, 1);