// 問題URL
// https://atcoder.jp/contests/abc165/tasks/abc165_a

function weLoveGolf(K: number, A: number, B: number) {
  let flag = false;

  for (let i = A; i <= B; i++) {
    if (i % K === 0) {
      flag = true;
      break;
    }
  }

  if (flag) {
    console.log('OK');
  } else {
    console.log('NG');
  }
}

weLoveGolf(7, 500, 600); // OK
weLoveGolf(4, 5, 7); // NG
weLoveGolf(1, 11, 11); // OK

// A以上B以下の範囲でKの倍数が存在するか確認する