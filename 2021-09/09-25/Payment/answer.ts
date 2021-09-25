// 問題URL
// https://atcoder.jp/contests/abc173/tasks/abc173_a

function payment(N: number) {
  const MAX_PAYMENT = 10000;
  const total = (MAX_PAYMENT - N).toString().split('');
  const totalToNumber = total[1] + total[2] + total[3];
  const answer = Number(totalToNumber);
  console.log(answer);
}

payment(1900) // 100
payment(3000) // 0