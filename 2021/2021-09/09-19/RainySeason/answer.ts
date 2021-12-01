// 問題URL
// https://atcoder.jp/contests/abc175/tasks/abc175_a

function rainySeason(W: string) {
  const weatherArr = W.split('');
  let rainyCount = 0;
  for (let i = 0; i < weatherArr.length; i++) {
    if (weatherArr[i] === 'R') {
      rainyCount++;
    } else if (i !== weatherArr.length - 1) {
      rainyCount = 0;
    }
  }

  console.log(rainyCount);
}

rainySeason('RRS');
rainySeason('SSS');
rainySeason('RSR');
