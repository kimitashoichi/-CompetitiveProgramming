// 問題URL
// https://atcoder.jp/contests/abc205/tasks/abc205_b

function permutationCheck(N: number, A: number[]) {
  let targetNumbers: number[] = [];
  let sortedNumbers = A.sort(function asc(a, b) {
    return a - b;
  });

  for (let i = 0; i < N; i++) {
    targetNumbers[i] = i + 1;
  }

  if (targetNumbers.toString() === sortedNumbers.toString()) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

permutationCheck(5, [3, 1, 2, 4, 5]); // Yes
permutationCheck(6, [3, 1, 4, 1, 5, 2]); // No
permutationCheck(3, [1, 2, 3]); // Yes
permutationCheck(1, [1]); // Yes