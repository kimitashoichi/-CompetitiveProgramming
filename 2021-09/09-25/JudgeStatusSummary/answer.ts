// 問題URL
// https://atcoder.jp/contests/abc173/tasks/abc173_b

// AC, WA, TLE, RE のそれぞれの回数を求める
// 配列の個数分forで繰り返し、その中でswitchでそれぞれの回数をカウントする

function judgeStatusSummary(N: number, cases: string[]) {
  let acCount = 0;
  let waCount = 0;
  let tleCount = 0;
  let reCount = 0;

  for (let i = 0; i < N; i++) {
    switch (cases[i]) {
      case 'AC':
        acCount++;
        break;
      case 'WA':
        waCount++;
        break;
      case 'TLE':
        tleCount++;
        break;
      case 'RE':
        reCount++;
        break;
    }
  }

  console.log('AC x', acCount);
  console.log('WA x', waCount);
  console.log('TLE x', tleCount);
  console.log('RE x', reCount);
}


const one = ['AC', 'TLE', 'AC', 'AC', 'WA', 'TLE'];
const two = ['AC','AC','AC','AC','AC','AC','AC','AC','AC','AC']
judgeStatusSummary(6, one);
// AC x 3
// WA x 1
// TLE x 2
// RE x 0

judgeStatusSummary(10, two);
// AC x 10
// WA x 0
// TLE x 0
// RE x 0

