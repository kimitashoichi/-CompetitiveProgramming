// 問題URL
// https://atcoder.jp/contests/abc124/tasks/abc124_a

function Buttons (A: number, B: number) {
  let total = 0;

  for (let i = 0; i <= 1; i++) {
    if (A >= B) {
      total += A;
      A--;
    } else {
      total += B;
      B--;
    }
  }

  console.log(total);
}

Buttons(5, 3); // 9
Buttons(3, 4); // 7
Buttons(6, 6); // 12