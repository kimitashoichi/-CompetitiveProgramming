// 問題URL
// https://atcoder.jp/contests/abc154/tasks/abc154_a

function remainingBalls(color: string[], balls: number[], U: string) {
  let ballsObj = new Object();
  for (let i = 0; i < color.length; i++) {
    ballsObj[color[i]] = balls[i];
  }
  ballsObj[U] -= 1;
  
  const answer = Object.values(ballsObj);
  console.log(answer);
}

remainingBalls(['red', 'blue'], [3, 4], 'red');