// 問題URL
// https://atcoder.jp/contests/abc169/tasks/abc169_b

function multiplicationTwo(N: number, numbers: number[]) {
  const MAX = 10 ** 18;
  let total = 1;
  
  for (let i = 0; i < N; i++) {
    total *= numbers[i];
  }


  if (total > MAX) {
    console.log(-1);
  } else {
    console.log(total);
  }
}

multiplicationTwo(2, [1000000000, 1000000000]); // 1000000000000000000
multiplicationTwo(3, [101, 9901, 999999000001]); // -1
// multiplicationTwo(31, [4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3, 2, 3, 8, 4, 6, 2, 6, 4, 3, 3,,8, 3, 2, 7, 9, 5, 0]); // 0