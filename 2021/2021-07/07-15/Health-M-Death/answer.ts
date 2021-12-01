// 問題URL
// https://atcoder.jp/contests/abc195/tasks/abc195_a

function healthMDeath(M: number, H: number) {
  if (H % M === 0) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}

// 倍数であるかの判定なのであまりがなければOK

healthMDeath(10, 120) // Yes
healthMDeath(10, 125) // No