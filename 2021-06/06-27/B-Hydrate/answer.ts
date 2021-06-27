// 問題URL
// https://atcoder.jp/contests/abc207/tasks/abc207_b

import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";


// A=>最初の水色のボール B=>追加の水色のボール C=>追加の赤色のボール D=>赤色のボールの倍数
function hydrate(A: number, B: number, C: number, D: number) {
  let buleBoalls = A;
  let redBalls = 0;

  let addBuleBalls = B;
  let addRedBalls = C;

  let count = 0;
  const multiple = D;

  while(true) {
    buleBoalls += addBuleBalls;
    redBalls += addRedBalls;
    count++;
    if (redBalls * multiple >= buleBoalls) {
      break;
    } else if (count > 10**5) {
      count = -1;
      break;
    }
  }

  console.log(count);
}

hydrate(5, 2, 3, 2); // 2
hydrate(6, 9, 2, 3); // -1