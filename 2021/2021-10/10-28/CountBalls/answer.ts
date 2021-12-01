// 問題URL
// https://atcoder.jp/contests/abc158/tasks/abc158_b

function countBalls(N: number, A: number, B: number) {
  const createBalls = (balls: number, color: string) => {
    let stringBalls: string[] = [];
    for (let i = 0; i < balls; i++) {
      stringBalls.push(color);
    }
    return stringBalls;
  }

  const totalLenght = N;
  const redBalls = createBalls(B, 'R');
  const buleBalls = createBalls(A, 'B');
  const targetLenght = buleBalls.concat(redBalls);
  let countBalls: string[] = [];

  for (let i = 0; i <= totalLenght; i++) {
    countBalls.push(...targetLenght);
  }

  const targetBalls = countBalls.slice(0, totalLenght);
  const count = targetBalls.filter((ball: string) => {
    if (ball === 'B') return ball;
  })

  console.log(count.length);
}

countBalls(8, 3, 4); // 


