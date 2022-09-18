// https://atcoder.jp/contests/abc108/tasks/abc108_a

function pair (K: number) {
  let count = 0;

  for (let i = 1; i <= K; i++) {
    const current = i;
    if (current % 2 !== 0) {
      for (let j = i + 1; j <= K; j++) {
        if (j % 2 === 0) count++;
      }
    } else {
      for (let j = i + 1; j <= K; j++) {
        if (j % 2 !== 0) count++;
      }
    }
  }

  console.log(count);
}


pair(3); // 2
pair(6); // 9
pair(11); // 30
pair(50); // 625