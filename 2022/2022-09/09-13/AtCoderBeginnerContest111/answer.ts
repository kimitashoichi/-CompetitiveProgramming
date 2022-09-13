// https://atcoder.jp/contests/abc111/tasks/abc111_b

function AtCoderBeginnerContest111 (N: number) {
  const target = N.toString().split('');
  const sameCheck = target.every((value) => value === target[0]);
  let answer;

  if (sameCheck) {
    console.log(N);
    return;
  };

  const compareNumber = Number(new Array(3).fill(target[0]).join(''));
  if (compareNumber < N) {
    console.log(Number(new Array(3).fill(Number(target[0]) + 1).join('')));
  } else {
    console.log(Number(new Array(3).fill(Number(target[0])).join('')));
  }
}

AtCoderBeginnerContest111(111); // 111
AtCoderBeginnerContest111(112); // 222
AtCoderBeginnerContest111(750); // 777