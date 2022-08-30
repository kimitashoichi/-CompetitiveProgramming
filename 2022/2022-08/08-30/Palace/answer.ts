// https://atcoder.jp/contests/abc113/tasks/abc113_b

function palace (N: number, T: number, A: number, H: number[]) {
  const FIXED_NUMBER = 0.006;
  let diff = 0;
  let answer = 0;

  for (let i = 0; i < H.length; i++) {
    const target = T - (H[i] * FIXED_NUMBER);

    if (i === 0) {
      diff = target;
    } else {
      answer = diff > target ? answer : i;
    }
  }

  console.log(answer + 1);
}

palace(2, 12, 5, [1000, 2000]); // 1
palace(3, 21, -11, [81234, 94124, 52141]); // 3