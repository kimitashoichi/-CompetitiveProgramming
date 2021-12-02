// 問題URL
// https://atcoder.jp/contests/abc144/tasks/abc144_b

function exec(N: number) {
  let flag = false;

  for (let i = 1; i <= 9; i++) {
    if (flag) break;
    for (let k = 1; k <= 9; k++) {
      let ans = i * k;
      if (ans === N) {
        flag = true;
        break;
      }
    }
  }

  console.log(flag ? 'Yes': 'No');
}

exec(10); // Yes
exec(50); // No
exec(81); // Yes