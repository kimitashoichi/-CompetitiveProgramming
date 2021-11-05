// 問題URL
// https://atcoder.jp/contests/abc156/tasks/abc156_a

function beginner(N: number, R: number) {
  let rating = 0;
  if (N <= 10) {
    rating = R + (100 * (10 - N));
  } else {
    rating = R;
  }

  console.log(rating);
}

beginner(2, 2919); // 3719
beginner(22, 3051); // 3051