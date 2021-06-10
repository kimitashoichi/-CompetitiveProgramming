// 問題URL
// https://atcoder.jp/contests/abc095/tasks/abc095_b

function bitterAlchemy(N: number, X: number, m: number[]): void {
  let gram = X;
  let count = 0;
  for (let i = 0; i < m.length; i++) {
    count++;
    gram -= m[i];
  }

  const minGram = m.sort(function asc(a, b) {
    return a - b;
  })[0];

  while(true){
    if (gram - minGram > 0) {
      gram -= minGram;
      count++
    } else {
      break;
    }
  }

  console.log(count);
}

bitterAlchemy(3, 1000, [120, 100, 140]);
bitterAlchemy(4, 360, [90, 90, 90, 90]);
bitterAlchemy(5, 3000, [150, 130, 150, 130, 110]);