// 問題URL
// https://atcoder.jp/contests/abc142/tasks/abc142_b

function rolleraCoaster(N: number, K: number, h: number[]) {
  const answer = h.filter(human =>  human >= K ).length;
  console.log(answer);
}

rolleraCoaster(4, 150, [150, 140, 100, 200]); // 2;
rolleraCoaster(1, 500, [499]); // 0
rolleraCoaster(5, 1, [100, 200, 300, 400, 500]); // 5