// https://atcoder.jp/contests/abc112/tasks/abc112_a

function programmingEducation (N: number, A?: number, B?: number) {
  switch (N) {
    case 1:
      console.log('Hello World');
      break;
    case 2:
      if (A && B) console.log(A+B);
      break;
  }
}

programmingEducation(1); // Hello World
programmingEducation(2, 3, 5); // 8
