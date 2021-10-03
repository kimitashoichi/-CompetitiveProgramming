// 問題URL
// https://atcoder.jp/contests/abc171/tasks/abc171_b

function mixJuice(N: number, K: number, prices: number[]) {
  const toAsc = function (a: number, b: number) {
    return a - b;
  };
  const pricesToAsc = prices.sort(toAsc);
  
  let totalPrice = 0;
  for (let i = 0; i < K; i ++) {
    totalPrice += pricesToAsc[i];
  }

  console.log(totalPrice);
}

mixJuice(5, 3, [50, 100, 80, 120, 80]); // 210
mixJuice(1, 1, [1000]); // 1000